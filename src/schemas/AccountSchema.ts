import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/types/FieldType';
import EnumAttributes from '../schema-core/types/EnumAttributes';

const AccountSchema = new Entity(
  'account',
  'A stripe account corresponding to /v1/accounts',
  'acct',
  [
    new Field(
      'business_type',
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
