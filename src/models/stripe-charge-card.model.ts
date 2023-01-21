export type StripeChargeCard = {
    brand: string | null;
    country: string | null;
    description?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding: string | null;
    iin?: string | null;
    issuer?: string | null;
    last4: string | null;
    moto?: boolean | null;
    network: string | null;
};
