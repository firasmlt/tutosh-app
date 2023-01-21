import {StripeCard} from './stripe-card.model';
import {StripeMetadata} from './stripe-metadata.model';

export type StripeSource = {
    id: string;
    object: 'source';
    amount: number | null;
    card?: StripeCard;
    client_secret: string;
    created: number;
    currency: string | null;
    customer?: string;
    flow: string;
    // noinspection SpellCheckingInspection
    livemode: boolean;
    metadata: StripeMetadata | null;
    statement_descriptor: string | null;
    status: string;
    type: string;
    usage: string | null;
};
