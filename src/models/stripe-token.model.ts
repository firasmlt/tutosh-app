import {StripeCard} from './stripe-card.model';

export type StripeToken = {
    id?: string;
    object?: string;
    card?: StripeCard;
    client_ip?: string;
    created?: number;
    // noinspection SpellCheckingInspection
    livemode?: boolean;
    type?: string;
    used?: boolean;
};
