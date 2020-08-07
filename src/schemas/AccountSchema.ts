import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/fieldtypes/FieldType';
import EnumAttributes from '../schema-core/fieldtypes/EnumAttributes';
import TextAttributes, { TextType } from '../schema-core/fieldtypes/TextAttributes';

const AccountSchema = new Entity(
  'account',
  'Account',
  'A stripe account corresponding to /v1/accounts',
  'acct',
  [
    new Field(
      'business_profile.product_description',
      'Product Description',
      'Internal-only description of the product sold by, or service provided by, the business.'
         + ' Used by Stripe for risk and underwriting purposes.',
      FieldType.TEXT,
      new TextAttributes(TextType.LONG),
    ),
    new Field(
      'business_profile.support_address',
      'Support Address',
      'A publicly available mailing address for sending support issues to.',
      FieldType.ADDRESS,
    ),
    new Field(
      'business_profile.support_email',
      'Support Email',
      'A publicly available email address for sending support issues to.',
      FieldType.EMAIL,
    ),
    new Field(
      'business_profile.support_phone',
      'Support Phone',
      'A publicly available phone number to call with support issues.',
      FieldType.PHONE,
    ),
    new Field(
      'business_profile.support_url',
      'Support Url',
      'A publicly available website for handling support issues.',
      FieldType.URL,
    ),
    new Field(
      'business_profile.url',
      'Business Url',
      'The business’s publicly available website.',
      FieldType.URL,
    ),
    new Field(
      'business_type',
      'Business Type',
      'The business type.',
      FieldType.ENUM,
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
