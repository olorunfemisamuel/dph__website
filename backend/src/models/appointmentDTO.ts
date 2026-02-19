// src/dtos/AppointmentDTO.ts

import { IAppointment, AppointmentStatus, AppointmentType } from '../models/Appointment';

export class CreateAppointmentDTO {
    patientId: string;
    doctorId: string;
    department?: string;
    title: string;
    description?: string;
    type: AppointmentType;
    startTime: Date;
    endTime: Date;
    location: {
        type: 'virtual' | 'in-person' | 'phone';
        link?: string;
        room?: string;
        address?: string;
    };
    notes?: string;
    participants?: Array<{
        userId: string;
        role: string;
    }>;
}

export class UpdateAppointmentDTO {
    title?: string;
    description?: string;
    type?: AppointmentType;
    status?: AppointmentStatus;
    startTime?: Date;
    endTime?: Date;
    location?: {
        type: 'virtual' | 'in-person' | 'phone';
        link?: string;
        room?: string;
        address?: string;
    };
    notes?: string;
}

export class AppointmentResponseDTO {
    id: string;
    appointmentId: string;
    patient: {
        id: string;
        name: string;
        email: string;
        phone?: string;
    };
    doctor: {
        id: string;
        name: string;
        email: string;
        specialization?: string;
    };
    department?: string;
    title: string;
    description?: string;
    type: AppointmentType;
    status: AppointmentStatus;
    startTime: Date;
    endTime: Date;
    duration: number;
    location: {
        type: 'virtual' | 'in-person' | 'phone';
        link?: string;
        room?: string;
        address?: string;
    };
    participants?: Array<{
        userId: string;
        role: string;
        status: string;
    }>;
    notes?: string;
    attachments?: Array<{
        name: string;
        url: string;
        uploadedAt: Date;
    }>;
    cancellation?: {
        reason: string;
        cancelledBy: string;
        cancelledAt: Date;
    };
    isUpcoming: boolean;
    isInProgress: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(appointment: IAppointment & { patient?: any; doctor?: any }) {
        this.id = appointment._id.toString();
        this.appointmentId = appointment.appointmentId;
        this.patient = appointment.patient ? {
            id: appointment.patient._id.toString(),
            name: appointment.patient.name,
            email: appointment.patient.email,
            phone: appointment.patient.phone
        } : { id: appointment.patientId.toString(), name: '', email: '' };
        this.doctor = appointment.doctor ? {
            id: appointment.doctor._id.toString(),
            name: appointment.doctor.name,
            email: appointment.doctor.email,
            specialization: appointment.doctor.specialization
        } : { id: appointment.doctorId.toString(), name: '', email: '' };
        this.department = appointment.department;
        this.title = appointment.title;
        this.description = appointment.description;
        this.type = appointment.type;
        this.status = appointment.status;
        this.startTime = appointment.startTime;
        this.endTime = appointment.endTime;
        this.duration = appointment.duration;
        this.location = appointment.location;
        this.participants = appointment.participants?.map(p => ({
            userId: p.userId.toString(),
            role: p.role,
            status: p.status
        }));
        this.notes = appointment.notes;
        this.attachments = appointment.attachments;
        this.cancellation = appointment.cancellation ? {
            reason: appointment.cancellation.reason,
            cancelledBy: appointment.cancellation.cancelledBy.toString(),
            cancelledAt: appointment.cancellation.cancelledAt
        } : undefined;
        this.isUpcoming = appointment.isUpcoming;
        this.isInProgress = appointment.isInProgress;
        this.createdAt = appointment.createdAt;
        this.updatedAt = appointment.updatedAt;
    }
}

export class AppointmentQueryDTO {
    patientId?: string;
    doctorId?: string;
    status?: AppointmentStatus | AppointmentStatus[];
    type?: AppointmentType | AppointmentType[];
    startDate?: Date;
    endDate?: Date;
    department?: string;
    location?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export class CancelAppointmentDTO {
    reason: string;
}

export class RescheduleAppointmentDTO {
    newStartTime: Date;
    newEndTime: Date;
    reason: string;
}