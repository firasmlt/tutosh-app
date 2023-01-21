import {StripePaymentMethodDetail} from './stripe-payment-method-detail.model';

export type StripePayment = {
    amount: number;
    amount_captured: number;
    amount_refunded: number;
    application_fee_amount: number | null;
    calculated_statement_descriptor: string | null;
    captured: boolean;
    created: number;
    currency: string;
    description: string | null;
    disputed: boolean;
    failure_code: string | null;
    failure_message: string | null;
    id: string;
    // noinspection SpellCheckingInspection
    livemode: boolean;
    object: 'charge';
    paid: boolean;
    payment_method: string | null;
    payment_method_details: StripePaymentMethodDetail | null,
    receipt_email: string | null;
    receipt_number: string | null;
    receipt_url: string | null;
    refunded: boolean;
    statement_descriptor: string | null;
    statement_descriptor_suffix: string | null;
    status: string;
    transfer_group: string | null;
};
