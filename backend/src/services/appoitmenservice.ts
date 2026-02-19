// src/services/AppointmentService.ts

import { Appointment, IAppointment, AppointmentStatus, AppointmentType } from '../models/Appointment';
import { User } from '../models/User';
import {
    CreateAppointmentDTO,
    UpdateAppointmentDTO,
    AppointmentQueryDTO,
    CancelAppointmentDTO,
    RescheduleAppointmentDTO,
    AppointmentResponseDTO
} from '../dtos/AppointmentDTO';
import logger from '../utils/logger';
import { Types } from 'mongoose';
import { NotificationService } from './NotificationService';

export class AppointmentService {
    private notificationService: NotificationService;

    constructor() {
        this.notificationService = new NotificationService();
    }

    async createAppointment(
        createData: CreateAppointmentDTO,
        userId: string
    ): Promise<AppointmentResponseDTO> {
        try {
            // Validate doctor and patient exist
            const [doctor, patient] = await Promise.all([
                User.findById(createData.doctorId),
                User.findById(createData.patientId)
            ]);

            if (!doctor || !patient) {
                throw new Error('Doctor or patient not found');
            }

            // Check for scheduling conflicts
            await this.checkScheduleConflict(
                createData.doctorId,
                createData.startTime,
                createData.endTime
            );

            // Calculate duration in minutes
            const duration = Math.round(
                (new Date(createData.endTime).getTime() - new Date(createData.startTime).getTime()) / 60000
            );

            const appointment = new Appointment({
                ...createData,
                duration,
                status: AppointmentStatus.SCHEDULED,
                createdBy: new Types.ObjectId(userId),
                updatedBy: new Types.ObjectId(userId)
            });

            await appointment.save();

            // Send notifications
            await this.notificationService.sendAppointmentConfirmation(appointment, patient, doctor);

            // Populate patient and doctor data
            await appointment.populate(['patientId', 'doctorId']);

            logger.info(`Appointment created: ${appointment.appointmentId}`);

            return new AppointmentResponseDTO(appointment as any);
        } catch (error) {
            logger.error('Error creating appointment:', error);
            throw error;
        }
    }

    async getAppointmentById(id: string): Promise<AppointmentResponseDTO | null> {
        try {
            const appointment = await Appointment.findById(id)
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization')
                .populate('participants.userId', 'name email role');

            if (!appointment) {
                return null;
            }

            return new AppointmentResponseDTO(appointment as any);
        } catch (error) {
            logger.error('Error fetching appointment:', error);
            throw error;
        }
    }

    async getAppointments(query: AppointmentQueryDTO): Promise<{
        appointments: AppointmentResponseDTO[];
        total: number;
        page: number;
        totalPages: number;
    }> {
        try {
            const {
                patientId,
                doctorId,
                status,
                type,
                startDate,
                endDate,
                department,
                location,
                page = 1,
                limit = 10,
                sortBy = 'startTime',
                sortOrder = 'asc'
            } = query;

            const filter: any = {};

            if (patientId) filter.patientId = new Types.ObjectId(patientId);
            if (doctorId) filter.doctorId = new Types.ObjectId(doctorId);
            if (department) filter.department = department;
            if (location) filter['location.type'] = location;

            if (status) {
                filter.status = Array.isArray(status) ? { $in: status } : status;
            }

            if (type) {
                filter.type = Array.isArray(type) ? { $in: type } : type;
            }

            if (startDate || endDate) {
                filter.startTime = {};
                if (startDate) filter.startTime.$gte = startDate;
                if (endDate) filter.startTime.$lte = endDate;
            }

            const sortOptions: any = {};
            sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

            const skip = (page - 1) * limit;

            const [appointments, total] = await Promise.all([
                Appointment.find(filter)
                    .populate('patientId', 'name email phone')
                    .populate('doctorId', 'name email specialization')
                    .sort(sortOptions)
                    .skip(skip)
                    .limit(limit),
                Appointment.countDocuments(filter)
            ]);

            return {
                appointments: appointments.map(apt => new AppointmentResponseDTO(apt as any)),
                total,
                page,
                totalPages: Math.ceil(total / limit)
            };
        } catch (error) {
            logger.error('Error fetching appointments:', error);
            throw error;
        }
    }

    async updateAppointment(
        id: string,
        updateData: UpdateAppointmentDTO,
        userId: string
    ): Promise<AppointmentResponseDTO | null> {
        try {
            const appointment = await Appointment.findById(id);

            if (!appointment) {
                return null;
            }

            // If times are being updated, check for conflicts
            if (updateData.startTime || updateData.endTime) {
                const startTime = updateData.startTime || appointment.startTime;
                const endTime = updateData.endTime || appointment.endTime;

                await this.checkScheduleConflict(
                    appointment.doctorId.toString(),
                    startTime,
                    endTime,
                    id
                );

                // Update duration if times changed
                if (updateData.startTime || updateData.endTime) {
                    updateData['duration'] = Math.round(
                        (new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000
                    );
                }
            }

            const updatedAppointment = await Appointment.findByIdAndUpdate(
                id,
                {
                    ...updateData,
                    updatedBy: new Types.ObjectId(userId),
                    updatedAt: new Date()
                },
                { new: true }
            )
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization');

            logger.info(`Appointment updated: ${id}`);

            return updatedAppointment ? new AppointmentResponseDTO(updatedAppointment as any) : null;
        } catch (error) {
            logger.error('Error updating appointment:', error);
            throw error;
        }
    }

    async cancelAppointment(
        id: string,
        cancelData: CancelAppointmentDTO,
        userId: string
    ): Promise<AppointmentResponseDTO | null> {
        try {
            const appointment = await Appointment.findById(id);

            if (!appointment) {
                return null;
            }

            if (appointment.status === AppointmentStatus.COMPLETED) {
                throw new Error('Cannot cancel a completed appointment');
            }

            if (appointment.status === AppointmentStatus.CANCELLED) {
                throw new Error('Appointment is already cancelled');
            }

            const cancelledAppointment = await Appointment.findByIdAndUpdate(
                id,
                {
                    status: AppointmentStatus.CANCELLED,
                    cancellation: {
                        reason: cancelData.reason,
                        cancelledBy: new Types.ObjectId(userId),
                        cancelledAt: new Date()
                    },
                    updatedBy: new Types.ObjectId(userId)
                },
                { new: true }
            )
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization');

            // Send cancellation notifications
            if (cancelledAppointment) {
                await this.notificationService.sendAppointmentCancellation(
                    cancelledAppointment,
                    cancelData.reason
                );
            }

            logger.info(`Appointment cancelled: ${id}`);

            return cancelledAppointment ? new AppointmentResponseDTO(cancelledAppointment as any) : null;
        } catch (error) {
            logger.error('Error cancelling appointment:', error);
            throw error;
        }
    }

    async rescheduleAppointment(
        id: string,
        rescheduleData: RescheduleAppointmentDTO,
        userId: string
    ): Promise<AppointmentResponseDTO | null> {
        try {
            const appointment = await Appointment.findById(id);

            if (!appointment) {
                return null;
            }

            if (appointment.status === AppointmentStatus.COMPLETED) {
                throw new Error('Cannot reschedule a completed appointment');
            }

            if (appointment.status === AppointmentStatus.CANCELLED) {
                throw new Error('Cannot reschedule a cancelled appointment');
            }

            // Check for conflicts with new time
            await this.checkScheduleConflict(
                appointment.doctorId.toString(),
                rescheduleData.newStartTime,
                rescheduleData.newEndTime,
                id
            );

            const rescheduledAppointment = await Appointment.findByIdAndUpdate(
                id,
                {
                    status: AppointmentStatus.RESCHEDULED,
                    startTime: rescheduleData.newStartTime,
                    endTime: rescheduleData.newEndTime,
                    duration: Math.round(
                        (new Date(rescheduleData.newEndTime).getTime() -
                         new Date(rescheduleData.newStartTime).getTime()) / 60000
                    ),
                    reschedule: {
                        previousTime: appointment.startTime,
                        requestedTime: rescheduleData.newStartTime,
                        reason: rescheduleData.reason,
                        status: 'approved',
                        requestedBy: new Types.ObjectId(userId)
                    },
                    updatedBy: new Types.ObjectId(userId)
                },
                { new: true }
            )
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization');

            // Send reschedule notifications
            if (rescheduledAppointment) {
                await this.notificationService.sendAppointmentReschedule(
                    rescheduledAppointment,
                    appointment.startTime
                );
            }

            logger.info(`Appointment rescheduled: ${id}`);

            return rescheduledAppointment ? new AppointmentResponseDTO(rescheduledAppointment as any) : null;
        } catch (error) {
            logger.error('Error rescheduling appointment:', error);
            throw error;
        }
    }

    async confirmAppointment(id: string, userId: string): Promise<AppointmentResponseDTO | null> {
        try {
            const appointment = await Appointment.findByIdAndUpdate(
                id,
                {
                    status: AppointmentStatus.CONFIRMED,
                    updatedBy: new Types.ObjectId(userId)
                },
                { new: true }
            )
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization');

            if (appointment) {
                await this.notificationService.sendAppointmentConfirmation(appointment);
            }

            return appointment ? new AppointmentResponseDTO(appointment as any) : null;
        } catch (error) {
            logger.error('Error confirming appointment:', error);
            throw error;
        }
    }

    async completeAppointment(id: string, userId: string, notes?: string): Promise<AppointmentResponseDTO | null> {
        try {
            const appointment = await Appointment.findByIdAndUpdate(
                id,
                {
                    status: AppointmentStatus.COMPLETED,
                    notes: notes,
                    updatedBy: new Types.ObjectId(userId)
                },
                { new: true }
            )
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization');

            return appointment ? new AppointmentResponseDTO(appointment as any) : null;
        } catch (error) {
            logger.error('Error completing appointment:', error);
            throw error;
        }
    }

    async getUpcomingAppointments(userId: string, role: 'patient' | 'doctor'): Promise<AppointmentResponseDTO[]> {
        try {
            const filter: any = {
                status: { $in: [AppointmentStatus.SCHEDULED, AppointmentStatus.CONFIRMED] },
                startTime: { $gte: new Date() }
            };

            if (role === 'patient') {
                filter.patientId = new Types.ObjectId(userId);
            } else {
                filter.doctorId = new Types.ObjectId(userId);
            }

            const appointments = await Appointment.find(filter)
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization')
                .sort({ startTime: 1 })
                .limit(10);

            return appointments.map(apt => new AppointmentResponseDTO(apt as any));
        } catch (error) {
            logger.error('Error fetching upcoming appointments:', error);
            throw error;
        }
    }

    async getTodayAppointments(doctorId: string): Promise<AppointmentResponseDTO[]> {
        try {
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);

            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);

            const appointments = await Appointment.find({
                doctorId: new Types.ObjectId(doctorId),
                startTime: { $gte: startOfDay, $lte: endOfDay },
                status: { $ne: AppointmentStatus.CANCELLED }
            })
                .populate('patientId', 'name email phone')
                .sort({ startTime: 1 });

            return appointments.map(apt => new AppointmentResponseDTO(apt as any));
        } catch (error) {
            logger.error('Error fetching today\'s appointments:', error);
            throw error;
        }
    }

    private async checkScheduleConflict(
        doctorId: string,
        startTime: Date,
        endTime: Date,
        excludeAppointmentId?: string
    ): Promise<void> {
        const query: any = {
            doctorId: new Types.ObjectId(doctorId),
            status: { $nin: [AppointmentStatus.CANCELLED, AppointmentStatus.COMPLETED] },
            $or: [
                {
                    startTime: { $lt: endTime },
                    endTime: { $gt: startTime }
                }
            ]
        };

        if (excludeAppointmentId) {
            query._id = { $ne: new Types.ObjectId(excludeAppointmentId) };
        }

        const conflictingAppointment = await Appointment.findOne(query);

        if (conflictingAppointment) {
            throw new Error('Doctor has a conflicting appointment at this time');
        }
    }

    async addAttachment(
        id: string,
        attachment: { name: string; url: string },
        userId: string
    ): Promise<AppointmentResponseDTO | null> {
        try {
            const appointment = await Appointment.findByIdAndUpdate(
                id,
                {
                    $push: { attachments: attachment },
                    updatedBy: new Types.ObjectId(userId)
                },
                { new: true }
            )
                .populate('patientId', 'name email phone')
                .populate('doctorId', 'name email specialization');

            return appointment ? new AppointmentResponseDTO(appointment as any) : null;
        } catch (error) {
            logger.error('Error adding attachment:', error);
            throw error;
        }
    }

    async getAppointmentStats(doctorId?: string, startDate?: Date, endDate?: Date): Promise<any> {
        try {
            const match: any = {};

            if (doctorId) {
                match.doctorId = new Types.ObjectId(doctorId);
            }

            if (startDate || endDate) {
                match.startTime = {};
                if (startDate) match.startTime.$gte = startDate;
                if (endDate) match.startTime.$lte = endDate;
            }

            const stats = await Appointment.aggregate([
                { $match: match },
                {
                    $group: {
                        _id: null,
                        totalAppointments: { $sum: 1 },
                        scheduledCount: {
                            $sum: { $cond: [{ $eq: ['$status', AppointmentStatus.SCHEDULED] }, 1, 0] }
                        },
                        confirmedCount: {
                            $sum: { $cond: [{ $eq: ['$status', AppointmentStatus.CONFIRMED] }, 1, 0] }
                        },
                        completedCount: {
                            $sum: { $cond: [{ $eq: ['$status', AppointmentStatus.COMPLETED] }, 1, 0] }
                        },
                        cancelledCount: {
                            $sum: { $cond: [{ $eq: ['$status', AppointmentStatus.CANCELLED] }, 1, 0] }
                        },
                        noShowCount: {
                            $sum: { $cond: [{ $eq: ['$status', AppointmentStatus.NO_SHOW] }, 1, 0] }
                        },
                        averageDuration: { $avg: '$duration' }
                    }
                }
            ]);

            return stats[0] || {
                totalAppointments: 0,
                scheduledCount: 0,
                confirmedCount: 0,
                completedCount: 0,
                cancelledCount: 0,
                noShowCount: 0,
                averageDuration: 0
            };
        } catch (error) {
            logger.error('Error getting appointment stats:', error);
            throw error;
        }
    }
}