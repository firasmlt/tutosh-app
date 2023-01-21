export type StripePaymentInput = {
    amount?: number;
    currency?: string;
    description?: string;
    source?: string;
    customer: string;
};
