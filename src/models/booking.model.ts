import {Profile} from "./profile.model";
import {Tutoring} from "./tutoring.model";
import {BookingStatus} from "./booking-status.model";
import {Session} from "./session.model";

export type Booking = {
    id?: number;
    tutoring?: Tutoring;
    session?: Session;
    profile?: Profile;
    status?: BookingStatus;
    transactionId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};
