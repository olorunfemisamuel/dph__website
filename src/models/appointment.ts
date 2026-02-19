// src/models/Appointment.ts

import { Schema, model, Document } from 'mongoose';

export enum AppointmentStatus {
    SCHEDULED = 'scheduled',
    CONFIRMED = 'confirmed',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    NO_SHOW = 'no_show',
    RESCHEDULED = 'rescheduled'
}

export enum AppointmentType {
    CONSULTATION = 'consultation',
    FOLLOW_UP = 'follow_up',
    INITIAL_ASSESSMENT = 'initial_assessment',
    REVIEW = 'review',
    EMERGENCY = 'emergency',
    ROUTINE = 'routine'
}

export interface IAppointment extends Document {
    appointmentId: string;
    patientId: Schema.Types.ObjectId;
    doctorId: Schema.Types.ObjectId;
    department?: string;
    title: string;
    description?: string;
    type: AppointmentType;
    status: AppointmentStatus;
    startTime: Date;
    endTime: Date;
    duration: number; // in minutes
    location?: {
        type: 'virtual' | 'in-person' | 'phone';
        link?: string;
        room?: string;
        address?: string;
    };
    participants?: Array<{
        userId: Schema.Types.ObjectId;
        role: string;
        status: 'pending' | 'accepted' | 'declined';
    }>;
    reminders?: Array<{
        type: 'email' | 'sms' | 'push';
        sentAt: Date;
        status: 'sent' | 'failed' | 'pending';
    }>;
    notes?: string;
    attachments?: Array<{
        name: string;
        url: string;
        uploadedAt: Date;
    }>;
    cancellation?: {
        reason: string;
        cancelledBy: Schema.Types.ObjectId;
        cancelledAt: Date;
    };
    reschedule?: {
        previousTime: Date;
        requestedTime: Date;
        reason: string;
        status: 'pending' | 'approved' | 'denied';
        requestedBy: Schema.Types.ObjectId;
    };
    metadata?: Map<string, any>;
    createdBy: Schema.Types.ObjectId;
    updatedBy: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const appointmentSchema = new Schema<IAppointment>({
    appointmentId: {
        type: String,
        required: true,
        unique: true,
        default: () => `APT${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    department: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    type: {
        type: String,
        enum: Object.values(AppointmentType),
        default: AppointmentType.CONSULTATION
    },
    status: {
        type: String,
        enum: Object.values(AppointmentStatus),
        default: AppointmentStatus.SCHEDULED,
        index: true
    },
    startTime: {
        type: Date,
        required: true,
        index: true
    },
    endTime: {
        type: Date,
        required: true
    },
    duration: { type: Number, required: true },
    location: {
        type: {
            type: String,
            enum: ['virtual', 'in-person', 'phone'],
            required: true
        },
        link: String,
        room: String,
        address: String
    },
    participants: [{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        role: String,
        status: {
            type: String,
            enum: ['pending', 'accepted', 'declined'],
            default: 'pending'
        }
    }],
    reminders: [{
        type: { type: String, enum: ['email', 'sms', 'push'] },
        sentAt: Date,
        status: { type: String, enum: ['sent', 'failed', 'pending'] }
    }],
    notes: String,
    attachments: [{
        name: String,
        url: String,
        uploadedAt: { type: Date, default: Date.now }
    }],
    cancellation: {
        reason: String,
        cancelledBy: { type: Schema.Types.ObjectId, ref: 'User' },
        cancelledAt: Date
    },
    reschedule: {
        previousTime: Date,
        requestedTime: Date,
        reason: String,
        status: {
            type: String,
            enum: ['pending', 'approved', 'denied'],
            default: 'pending'
        },
        requestedBy: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    metadata: { type: Map, of: Schema.Types.Mixed },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
});

// Indexes for better query performance
appointmentSchema.index({ patientId: 1, startTime: -1 });
appointmentSchema.index({ doctorId: 1, startTime: -1 });
appointmentSchema.index({ status: 1, startTime: 1 });
appointmentSchema.index({ 'location.type': 1 });

// Virtual for checking if appointment is upcoming
appointmentSchema.virtual('isUpcoming').get(function() {
    return this.startTime > new Date() &&
           [AppointmentStatus.SCHEDULED, AppointmentStatus.CONFIRMED].includes(this.status as AppointmentStatus);
});

// Virtual for checking if appointment is in progress
appointmentSchema.virtual('isInProgress').get(function() {
    const now = new Date();
    return now >= this.startTime && now <= this.endTime &&
           this.status === AppointmentStatus.CONFIRMED;
});

export const Appointment = model<IAppointment>('Appointment', appointmentSchema);