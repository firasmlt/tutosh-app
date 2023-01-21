import {NotificationMetadata} from "./notification-metadata.model";

export type SnsNotificationInput = {
    title: string,
    body: string,
    userIds?: number[],
    profileIds?: number[],
    type: 'chat' | 'wallet' | 'applying',
    metadata?: NotificationMetadata,
};
