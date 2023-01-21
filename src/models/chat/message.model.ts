import { Profile } from '../profile.model';

export type Message = {
    options: any;
    status: number;
    msg?: string;
    typing?: boolean;
    option: string;
    room: string;
    sender: number;
    profile?: Profile;
};
