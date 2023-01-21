import {Group} from './group.model';
import {GroupDetailRole} from './group-detail-role.model';
import {GroupDetailStatus} from './group-detail-status.model';
import {GroupDetailNotification} from './group-detail-notification.model';

export type GroupDetail = {
    id?: number;
    group?: Group;
    groupId?: Group;
    memberProfileId?: number;
    memberRole?: GroupDetailRole;
    status?: GroupDetailStatus;
    notification?: GroupDetailNotification;
    inviterProfileId?: number;
};
