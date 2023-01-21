import {StripeSource} from './stripe-source.model';

export type StripeSourceList = {
    object: 'list';
    data: StripeSource[];
};
