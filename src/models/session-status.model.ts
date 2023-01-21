export class SessionStatus {
    id: number;
    label: string;
}

export enum SessionStatusEnum {
    POSTED = 1,
    ENDED = 2,
    CANCELED = 3,
    OVERLAPPING = 4,
    ANOTHER_ACCEPTED = 5,
    CONFIRMED = 6,
    TIMEOUT = 7,
    IN_PROGRESS = 8,
}
