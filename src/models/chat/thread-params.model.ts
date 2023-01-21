export type ThreadParams = {
    session: string;
    type: 'Individual' | 'Group' | 'Tutoring';
    typeId: number;
    participants: string;
};
