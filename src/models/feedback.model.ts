import {Profile} from './profile.model';

export type Feedback = {
    id?: number;
    profile: Profile;
    pageFrom?: string;
    type?: string;
    description?: string;
};
