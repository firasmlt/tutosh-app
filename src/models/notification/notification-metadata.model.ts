import {ChatMetadata} from "./chat-metadata.model";
import {ApplyingNotificationMetadata} from "./applying-notification-metadata.model";

export type NotificationMetadata = {
    chatMetadata?: ChatMetadata,
    applyingMetadata?: ApplyingNotificationMetadata,
};