import {User} from './user.model';
import {ProfileType} from './profile-type.model';
import {ProfileTutoringLanguage} from './profile-tutoring-language.model';
import {Language} from './language.model';
import {Currency} from './currency.model';
import {SessionReview} from './session-review.model';
import {SessionRole} from "./session-role.model";
import {MaterialInput} from "./material-input.model";
import {Profile} from "./profile.model";

//TODO change every entry to its equivalent input
export type ProfileInput = {
    id?: number;
    user: User;
    profileType: ProfileType;
    name?: string;
    firstName?: string;
    lastName?: string;
    iban?: string;
    photoPath?: string;
    sponsoredByProfile: Profile;
    tutoringLanguages: ProfileTutoringLanguage[];
    appDisplayLanguage: Language;
    thematicId?: number;
    profileMaterials: MaterialInput[];
    reminders?: number[];
    reminderEmail?: string;
    reminderPhone?: string;
    sessionRole?: SessionRole;
    currency?: Currency;
    reviews?: SessionReview[];
    rating?: number;
};
