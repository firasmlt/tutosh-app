export type Invite = {
    id?: number;
    profileIdInviter?: number;
    accepted?: boolean;
    acceptedDate?: Date;
    userIdInvited?: number;
};
