export type ChatMetadata = {
    sessionId?: string,
    imagUrl?: string,
    name?: string,
    type?: 'Individual' | 'Group' | 'Tutoring',
    typeId?: number,
    participants?: number[],
};