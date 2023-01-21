import {StripeMetadata} from './stripe-metadata.model';
import {StripeCustomerInvoiceSetting} from './stripe-customer-invoice-setting.model';
import {StripeCustomerAddress} from './stripe-customer-address.model';
import {StripeSourceList} from './stripe-source-list.model';

export type StripeCustomer = {
    id: string;
    object: string;
    address: StripeCustomerAddress;
    balance: number;
    created: number;
    currency: string;
    default_source: string;
    delinquent: boolean;
    description: string;
    discount: string;
    email: string;
    invoice_prefix: string;
    invoice_settings: StripeCustomerInvoiceSetting;
    // noinspection SpellCheckingInspection
    livemode: boolean;
    metadata: StripeMetadata;
    name: string;
    phone: string;
    preferred_locales: string[];
    shipping: string;
    sources?: StripeSourceList;
    tax_exempt: string;
};
