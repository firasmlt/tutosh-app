import {Tutoring} from "./tutoring.model";
import {Session} from "./session.model";

export type TutoringTutorialLink = {
    id?: number;
    tutoringId?: number;
    tutoring?: Tutoring;
    session?: Session;
    recordingId?: number;
    description?: string;
    source?: string;
    thumbnail?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};
