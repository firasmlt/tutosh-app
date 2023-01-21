import {Session} from "./session.model";
import {Profile} from "./profile.model";

export type SessionReview = {
    profileId?: number;
    session?: Session;
    description?: string;
    score?: number;
    profile?: Profile;
    createdAt?: Date;
};
