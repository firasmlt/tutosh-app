import {AccountStatus} from './account-status.model';
import {Language} from './language.model';
import {Profile} from './profile.model';
import {Country} from './country.model';

export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    role?: string;
    score?: number;
    accountStatus?: AccountStatus;
    appLanguage?: Language;
    activeProfile?: Profile;
    activeProfileId?: number;
    emailValidation?: boolean;
    phoneValidation?: boolean;
    city?: string;
    country?: Country;
    createdAt?: Date;
    updatedAt?: Date;
};
