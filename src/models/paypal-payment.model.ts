import {PaypalPaymentLink} from './paypal-payment-link.model';

export type PaypalPayment = {
    id?: string;
    links?: PaypalPaymentLink[];
    status?: string;
};
