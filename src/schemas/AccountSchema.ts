/* eslint-disable camelcase */
import type Stripe from 'stripe';
import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/fieldtypes/FieldType';
import EnumAttributes from '../schema-core/fieldtypes/EnumAttributes';
import TextAttributes, { TextType } from '../schema-core/fieldtypes/TextAttributes';

class AccountField<T> extends Field<Stripe.AccountUpdateParams, T> {}
const AccountSchema = new Entity<Stripe.AccountUpdateParams>(
  'account',
  'Account',
  'A stripe account corresponding to /v1/accounts',
  'acct',
  [
    new AccountField<string>(
      'business_profile.mcc',
      'MCC',
      'The merchant category code for the account. MCCs are used to classify businesses ' +
        'based on the goods or services they provide.',
      FieldType.ENUM,
      (params, value) => {
        const business_profile: Stripe.AccountUpdateParams.BusinessProfile =
          params.business_profile || ({} as Stripe.AccountUpdateParams.BusinessProfile);
        business_profile.mcc = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
      },
      (params) => params.business_profile?.mcc,
      new EnumAttributes([
        { value: '7623', label: 'A/C, Refrigeration Repair' },
        { value: '8931', label: 'Accounting/Bookkeeping Services' },
        { value: '7311', label: 'Advertising Services' },
        { value: '0763', label: 'Agricultural Cooperative' },
      ]),
    ),
    new AccountField<string>(
      'business_profile.product_description',
      'Product Description',
      'Internal-only description of the product sold by, or service provided by, the business.' +
        ' Used by Stripe for risk and underwriting purposes.',
      FieldType.TEXT,
      (params, value) => {
        const business_profile: Stripe.AccountUpdateParams.BusinessProfile =
          params.business_profile || ({} as Stripe.AccountUpdateParams.BusinessProfile);
        business_profile.product_description = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
      },
      (params) => params.business_profile?.product_description,
      new TextAttributes(TextType.LONG),
    ),
    new AccountField<Stripe.AccountUpdateParams.BusinessProfile.SupportAddress>(
      'business_profile.support_address',
      'Support Address',
      'A publicly available mailing address for sending support issues to.',
      FieldType.ADDRESS,
      (params, value) => {
        const business_profile: Stripe.AccountUpdateParams.BusinessProfile =
          params.business_profile || ({} as Stripe.AccountUpdateParams.BusinessProfile);
        business_profile.support_address = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
      },
      (params) => params.business_profile?.support_address,
    ),
    new AccountField<string>(
      'business_profile.support_email',
      'Support Email',
      'A publicly available email address for sending support issues to.',
      FieldType.EMAIL,
      (params, value) => {
        const business_profile: Stripe.AccountUpdateParams.BusinessProfile =
          params.business_profile || ({} as Stripe.AccountUpdateParams.BusinessProfile);
        business_profile.support_email = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
      },
      (params) => params.business_profile?.support_email,
    ),
    new AccountField<string>(
      'business_profile.support_phone',
      'Support Phone',
      'A publicly available phone number to call with support issues.',
      FieldType.PHONE,
      (params, value) => {
        const business_profile: Stripe.AccountUpdateParams.BusinessProfile =
          params.business_profile || ({} as Stripe.AccountUpdateParams.BusinessProfile);
        business_profile.support_phone = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
      },
      (params) => params.business_profile?.support_phone,
    ),
    new AccountField<string>(
      'business_profile.support_url',
      'Support Url',
      'A publicly available website for handling support issues.',
      FieldType.URL,
      (params, value) => {
        const business_profile: Stripe.AccountUpdateParams.BusinessProfile =
          params.business_profile || ({} as Stripe.AccountUpdateParams.BusinessProfile);
        business_profile.support_url = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
      },
      (params) => params.business_profile?.support_url,
    ),
    new AccountField<string>(
      'business_profile.url',
      'Business Url',
      'The business’s publicly available website.',
      FieldType.URL,
      (params, value) => {
        const business_profile: Stripe.AccountUpdateParams.BusinessProfile =
          params.business_profile || ({} as Stripe.AccountUpdateParams.BusinessProfile);
        business_profile.url = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
      },
      (params) => params.business_profile?.url,
    ),
    new AccountField<Stripe.Account.BusinessType>(
      'business_type',
      'Business Type',
      'The business type.',
      FieldType.ENUM,
      (params, value) => {
        params.business_type = value;
        return Promise.resolve(params);
      },
      (params) => params.business_type,
      new EnumAttributes([
        { value: 'company', label: 'Company' },
        { value: 'government_entity', label: 'Government Entity' },
        { value: 'individual', label: 'Individual' },
        { value: 'non_profit', label: 'Non Profit' },
      ]),
    ),
    new AccountField<string>(
      'company.name',
      'Name',
      'The company’s legal name.',
      FieldType.TEXT,
      (params, value) => {
        const company: Stripe.AccountUpdateParams.Company =
          params.company || ({} as Stripe.AccountUpdateParams.Company);
        company.name = value;
        params.company = company;
        return Promise.resolve(params);
      },
      (params) => params.company?.name,
      new TextAttributes(TextType.SHORT),
    ),
    new AccountField<string>(
      'company.phone',
      'Phone Number',
      'The company’s phone number (used for verification).',
      FieldType.PHONE,
      (params, value) => {
        const company: Stripe.AccountUpdateParams.Company =
          params.company || ({} as Stripe.AccountUpdateParams.Company);
        company.phone = value;
        params.company = company;
        return Promise.resolve(params);
      },
      (params) => params.company?.phone,
    ),
    new AccountField<string>(
      'company.tax_id',
      'Tax ID',
      'The business ID number of the company, as appropriate for the company’s ' +
        'country. (Examples are an Employer ID Number in the U.S., a Business Number ' +
        'in Canada, or a Company Number in the UK.)',
      FieldType.ID_NUMBER,
      (container, value) => {
        const company: Stripe.AccountUpdateParams.Company =
          container.company || ({} as Stripe.AccountUpdateParams.Company);
        company.tax_id = value;
        container.company = company;
        return Promise.resolve(container);
      },
      (container) => container.company?.tax_id,
    ),
    new AccountField<Stripe.AccountUpdateParams.Company.Address>(
      'company.address',
      'Address',
      "The company's primary address.",
      FieldType.ADDRESS,
      (params, value) => {
        const company: Stripe.AccountUpdateParams.Company =
          params.company || ({} as Stripe.AccountUpdateParams.Company);
        company.address = value;
        params.company = company;
        return Promise.resolve(params);
      },
      (params) => params.company?.address,
    ),
  ],
);

export default AccountSchema;
