export type ApplyingNotificationMetadata = {
    sessionId?: number,
    action?: 'applied' | 'cancelled',
    profileId?: number,
}