import {Profile} from "./profile.model";
import {Language} from "./language.model";

export type ProfileTutoringLanguage = {
    id?: number;
    profile?: Profile;
    language?: Language;
};
