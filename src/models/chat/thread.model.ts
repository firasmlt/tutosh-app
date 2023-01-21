import {Profile} from '../profile.model';
import {Group} from '../group.model';
import {Session} from '../session.model';

export type Thread = {
    id?: number;
    groupId?: number;
    profileId?: number;
    tutoringId?: number;
    sessionId: string;
    type: 'Individual' | 'Group' | 'Tutoring';
    participants: string[] | number[];
    lastMessage?: {
        message?: string;
        media?: string;
        senderId: string;
        dateTime: Date;
        readBy: number[];
        deliveryStatus: number;
    }
    profile?: Profile;
    group?: Group;
    tutoring?: Session;
    title?: string;
    avatar?: string;
};
