export class BookingStatus {
    id?: number;
    label?: string;
}

export enum BookingStatusEnum { 
    BOOKED = 1,
    ANOTHER_ACCEPTED = 2,
    OVERLAPPING = 3,
    CONFIRMED = 4,
    CANCELLED = 5,
    REFUSED = 6
}
