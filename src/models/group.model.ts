import {GroupType} from './group-type.model';
import {GroupStatus} from './group-status.model';

export type Group = {
    id?: number;
    name?: string;
    adminProfileId?: number;
    type?: GroupType;
    institutionName?: string;
    institutionId?: number;
    isVerified?: boolean;
    status?: GroupStatus;
    photo?: string;
    detailId?: number;
    checked?: boolean;
};
