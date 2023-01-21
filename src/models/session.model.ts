import {Currency} from "./currency.model";
import {SessionStatus} from "./session-status.model";
import {Applying} from "./applying.model";
import {Tutoring} from "./tutoring.model";
import {Booking} from "./booking.model";

export type Session = {
    id?: number;
    applying?: Applying;
    applyings?: Applying[];
    profileId?: number;
    meetingDate?: Date;
    duration?: number;
    //clp?: number;
    //hourlyRate?: number;
    //fppa?: number;
    //currency?: Currency;
    attendees?: any[];
    attendeesCount?: number;
    isBooked?: boolean;
    isCancelled?: boolean; // cancelledBooking
    trending?: string;
    //cost?: number;
    isPrivate?: boolean;
    isDisabled?: boolean;
    status?: SessionStatus;
    tutoring?: Tutoring;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    tokens?: number;
    tutee1ProfileId?: number;
    //tutee1Budget?: number;
    tutee2ProfileId?: number;
    tutee3ProfileId?: number;
    tutor1ProfileId?: number;
    //tutor1Price?: number;
    tutor2ProfileId?: number;
    //tutor2Price?: number;
    tutor3ProfileId?: number;
    //tutor3Price?: number;
    bookings?: Booking[];
    totalBudgetSum?: number;
};
