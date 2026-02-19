// src/controllers/AppointmentController.ts

import { Request, Response } from 'express';
import { AppointmentService } from '../services/AppointmentService';
import {
    CreateAppointmentDTO,
    UpdateAppointmentDTO,
    AppointmentQueryDTO,
    CancelAppointmentDTO,
    RescheduleAppointmentDTO
} from '../dtos/AppointmentDTO';
import logger from '../utils/logger';

export class AppointmentController {
    private appointmentService: AppointmentService;

    constructor() {
        this.appointmentService = new AppointmentService();
    }

    createAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const createData: CreateAppointmentDTO = req.body;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointment = await this.appointmentService.createAppointment(createData, userId);
            res.status(201).json(appointment);
        } catch (error: any) {
            logger.error('Error in createAppointment:', error);
            res.status(400).json({ error: error.message });
        }
    };

    getAppointmentById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const appointment = await this.appointmentService.getAppointmentById(id);

            if (!appointment) {
                res.status(404).json({ error: 'Appointment not found' });
                return;
            }

            res.json(appointment);
        } catch (error: any) {
            logger.error('Error in getAppointmentById:', error);
            res.status(400).json({ error: error.message });
        }
    };

    getAppointments = async (req: Request, res: Response): Promise<void> => {
        try {
            const query: AppointmentQueryDTO = {
                patientId: req.query.patientId as string,
                doctorId: req.query.doctorId as string,
                status: req.query.status as any,
                type: req.query.type as any,
                startDate: req.query.startDate ? new Date(req.query.startDate as string) : undefined,
                endDate: req.query.endDate ? new Date(req.query.endDate as string) : undefined,
                department: req.query.department as string,
                location: req.query.location as string,
                page: req.query.page ? parseInt(req.query.page as string) : undefined,
                limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
                sortBy: req.query.sortBy as string,
                sortOrder: req.query.sortOrder as 'asc' | 'desc'
            };

            const result = await this.appointmentService.getAppointments(query);
            res.json(result);
        } catch (error: any) {
            logger.error('Error in getAppointments:', error);
            res.status(400).json({ error: error.message });
        }
    };

    updateAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const updateData: UpdateAppointmentDTO = req.body;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointment = await this.appointmentService.updateAppointment(id, updateData, userId);

            if (!appointment) {
                res.status(404).json({ error: 'Appointment not found' });
                return;
            }

            res.json(appointment);
        } catch (error: any) {
            logger.error('Error in updateAppointment:', error);
            res.status(400).json({ error: error.message });
        }
    };

    cancelAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const cancelData: CancelAppointmentDTO = req.body;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointment = await this.appointmentService.cancelAppointment(id, cancelData, userId);

            if (!appointment) {
                res.status(404).json({ error: 'Appointment not found' });
                return;
            }

            res.json(appointment);
        } catch (error: any) {
            logger.error('Error in cancelAppointment:', error);
            res.status(400).json({ error: error.message });
        }
    };

    rescheduleAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const rescheduleData: RescheduleAppointmentDTO = req.body;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointment = await this.appointmentService.rescheduleAppointment(id, rescheduleData, userId);

            if (!appointment) {
                res.status(404).json({ error: 'Appointment not found' });
                return;
            }

            res.json(appointment);
        } catch (error: any) {
            logger.error('Error in rescheduleAppointment:', error);
            res.status(400).json({ error: error.message });
        }
    };

    confirmAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointment = await this.appointmentService.confirmAppointment(id, userId);

            if (!appointment) {
                res.status(404).json({ error: 'Appointment not found' });
                return;
            }

            res.json(appointment);
        } catch (error: any) {
            logger.error('Error in confirmAppointment:', error);
            res.status(400).json({ error: error.message });
        }
    };

    completeAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const { notes } = req.body;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointment = await this.appointmentService.completeAppointment(id, userId, notes);

            if (!appointment) {
                res.status(404).json({ error: 'Appointment not found' });
                return;
            }

            res.json(appointment);
        } catch (error: any) {
            logger.error('Error in completeAppointment:', error);
            res.status(400).json({ error: error.message });
        }
    };

    getUpcomingAppointments = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.user?.id;
            const role = req.user?.role as 'patient' | 'doctor';

            if (!userId || !role) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointments = await this.appointmentService.getUpcomingAppointments(userId, role);
            res.json(appointments);
        } catch (error: any) {
            logger.error('Error in getUpcomingAppointments:', error);
            res.status(400).json({ error: error.message });
        }
    };

    getTodayAppointments = async (req: Request, res: Response): Promise<void> => {
        try {
            const doctorId = req.user?.id;

            if (!doctorId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointments = await this.appointmentService.getTodayAppointments(doctorId);
            res.json(appointments);
        } catch (error: any) {
            logger.error('Error in getTodayAppointments:', error);
            res.status(400).json({ error: error.message });
        }
    };

    addAttachment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const { name, url } = req.body;
            const userId = req.user?.id;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            const appointment = await this.appointmentService.addAttachment(
                id,
                { name, url },
                userId
            );

            if (!appointment) {
                res.status(404).json({ error: 'Appointment not found' });
                return;
            }

            res.json(appointment);
        } catch (error: any) {
            logger.error('Error in addAttachment:', error);
            res.status(400).json({ error: error.message });
        }
    };

    getAppointmentStats = async (req: Request, res: Response): Promise<void> => {
        try {
            const { doctorId, startDate, endDate } = req.query;

            const stats = await this.appointmentService.getAppointmentStats(
                doctorId as string,
                startDate ? new Date(startDate as string) : undefined,
                endDate ? new Date(endDate as string) : undefined
            );

            res.json(stats);
        } catch (error: any) {
            logger.error('Error in getAppointmentStats:', error);
            res.status(400).json({ error: error.message });
        }
    };
}