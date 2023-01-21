export class ApplyingStatus {
    id?: number;
    label?: string;
}


export enum ApplyingStatusEnum { 
    APPLIED = 1,
    ANOTHER_ACCEPTED = 2,
    OVERLAPPING = 3,
    ACCEPTED = 4,
    CANCELLED = 5,
    REFUSED = 6
}
