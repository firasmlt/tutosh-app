import {Profile} from "./profile.model";
import {Tutoring} from "./tutoring.model";
import {ApplyingStatus} from "./applying-status.model";
import {Session} from "./session.model";

export type Applying = {
    id?: number;
    tutoring?: Tutoring;
    profile?: Profile;
    status?: ApplyingStatus;
    transactionId?: number;
    sessions?: Session[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};
