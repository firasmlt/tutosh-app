import {User} from './user.model';
import {RefPaySystem} from './ref-pay-system.model';

export type PayMethod = {
    id?: number;
    user?: User;
    paymentMethodSystem?: RefPaySystem;
    paymentMethodName?: string;
    paymentExternalId?: string;
    systemMethodId?: string;
    validityDate?: Date;
    type?: string;
    isDefaultPaymentMethod?: boolean;
    isDefaultPayoutMethod?: boolean;
    label?: string;
    brand?: string;
};

