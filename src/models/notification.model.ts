import {NotificationType} from './notification-type.model';
import {Profile} from './profile.model';
import {User} from './user.model';
import {NotificationCta} from './notification-cta.model';
import {NotificationQueryParam} from './notification-query-param.model';

export type Notification = {
    id?: number;
    type: NotificationType;
    title: string;
    userId: number;
    profileId?: number;
    message?: string;
    subMessage?: string;
    cta?: NotificationCta;
    queryParam?: NotificationQueryParam[];
    icon?: string;
    profile?: Profile;
    user?: User;
    seen?: boolean;
    createdAt?: Date;
};
