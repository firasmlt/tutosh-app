import {TransactionType} from './transaction-type.model';
import {Profile} from './profile.model';

export type Transaction = {
    id?: number;
    profile?: Profile;
    activityDescription?: string;
    tutoringId?: number;
    paymentMethodId?: number;
    activityType?: TransactionType;
    creditDebit?: string;
    amount?: number;
    currency?: string;
    balance?: number;
    tokenAmount?: number;
    tokenBalance?: number;
    userId?: number;
    createdAt?: Date;
};
