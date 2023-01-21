import {Profile} from '../profile.model';

export type ChatModel = {
    chat_status: number;
    chat_id?: number;
    chat_media?: string;
    chat_msg: string;
    chat_type?: string;
    message_date: Date;
    profile?: Profile;
    session_id: string;
    status?: number;
    type_id?: number;
    user_id: string;
};
