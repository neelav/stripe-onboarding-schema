/* eslint-disable camelcase */
import Stripe from 'stripe';
import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/fieldtypes/FieldType';
import EnumAttributes from '../schema-core/fieldtypes/EnumAttributes';
import TextAttributes, { TextType } from '../schema-core/fieldtypes/TextAttributes';

const AccountSchema = new Entity<Stripe.Account>(
  'account',
  'Account',
  'A stripe account corresponding to /v1/accounts',
  'acct',
  [
    new Field<Stripe.Account, string>(
      'business_profile.product_description',
      'Product Description',
      'Internal-only description of the product sold by, or service provided by, the business.' +
        ' Used by Stripe for risk and underwriting purposes.',
      FieldType.TEXT,
      (container, value) => {
        const business_profile: Stripe.Account.BusinessProfile =
          container.business_profile || ({} as Stripe.Account.BusinessProfile);
        business_profile.product_description = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
      },
      (container) => Promise.resolve(container.business_profile?.product_description),
      new TextAttributes(TextType.LONG),
    ),
    new Field<Stripe.Account, Stripe.Address>(
      'business_profile.support_address',
      'Support Address',
      'A publicly available mailing address for sending support issues to.',
      FieldType.ADDRESS,
      (container, value) => {
        const business_profile: Stripe.Account.BusinessProfile =
          container.business_profile || ({} as Stripe.Account.BusinessProfile);
        business_profile.support_address = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
      },
      (container) => Promise.resolve(container.business_profile?.support_address),
    ),
    new Field<Stripe.Account, string>(
      'business_profile.support_email',
      'Support Email',
      'A publicly available email address for sending support issues to.',
      FieldType.EMAIL,
      (container, value) => {
        const business_profile: Stripe.Account.BusinessProfile =
          container.business_profile || ({} as Stripe.Account.BusinessProfile);
        business_profile.support_email = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
      },
      (container) => Promise.resolve(container.business_profile?.support_email),
    ),
    new Field<Stripe.Account, string>(
      'business_profile.support_phone',
      'Support Phone',
      'A publicly available phone number to call with support issues.',
      FieldType.PHONE,
      (container, value) => {
        const business_profile: Stripe.Account.BusinessProfile =
          container.business_profile || ({} as Stripe.Account.BusinessProfile);
        business_profile.support_phone = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
      },
      (container) => Promise.resolve(container.business_profile?.support_phone),
    ),
    new Field<Stripe.Account, string>(
      'business_profile.support_url',
      'Support Url',
      'A publicly available website for handling support issues.',
      FieldType.URL,
      (container, value) => {
        const business_profile: Stripe.Account.BusinessProfile =
          container.business_profile || ({} as Stripe.Account.BusinessProfile);
        business_profile.support_url = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
      },
      (container) => Promise.resolve(container.business_profile?.support_url),
    ),
    new Field<Stripe.Account, string>(
      'business_profile.url',
      'Business Url',
      'The business’s publicly available website.',
      FieldType.URL,
      (container, value) => {
        const business_profile: Stripe.Account.BusinessProfile =
          container.business_profile || ({} as Stripe.Account.BusinessProfile);
        business_profile.url = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
      },
      (container) => Promise.resolve(container.business_profile?.url),
    ),
    new Field<Stripe.Account, Stripe.Account.BusinessType>(
      'business_type',
      'Business Type',
      'The business type.',
      FieldType.ENUM,
      (container, value) => {
        container.business_type = value;
        return Promise.resolve(container);
      },
      (container) => Promise.resolve(container.business_type),
      new EnumAttributes([
        { value: 'company', label: 'Company' },
        { value: 'government_entity', label: 'Government Entity' },
        { value: 'individual', label: 'Individual' },
        { value: 'non_profit', label: 'Non Profit' },
      ]),
    ),
  ],
);

export default AccountSchema;
