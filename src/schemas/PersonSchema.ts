import type Stripe from 'stripe';
import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/fieldtypes/FieldType';
import FieldBundle from '../schema-core/FieldBundle';
import FieldBundleType from '../schema-core/fieldtypes/FieldBundleType';
import TextAttributes, { TextType } from '../schema-core/fieldtypes/TextAttributes';
import DateAttributes, { DateType } from '../schema-core/fieldtypes/DateAttributes';

class PersonField<T> extends Field<Stripe.PersonUpdateParams, T> {}

const firstName = new PersonField<string>(
  'first_name',
  'First Name',
  "The person's first name.",
  FieldType.TEXT,
  (params, value) => {
    params.first_name = value;
    return Promise.resolve(params);
  },
  (params) => params.first_name,
  new TextAttributes(TextType.SHORT),
);

const lastName = new PersonField<string>(
  'last_name',
  'Last Name',
  "The person's last name.",
  FieldType.TEXT,
  (params, value) => {
    params.last_name = value;
    return Promise.resolve(params);
  },
  (params) => params.last_name,
  new TextAttributes(TextType.SHORT),
);

const PersonSchema = new Entity<Stripe.PersonUpdateParams>(
  'person',
  'Person',
  'A stripe person corresponding to /v1/persons',
  'person',
  [
    firstName,
    lastName,
    new PersonField<string>(
      'email',
      'Email',
      "The person's email address.",
      FieldType.EMAIL,
      (params, value) => {
        params.email = value;
        return Promise.resolve(params);
      },
      (params) => params.email,
    ),
    new PersonField<string>(
      'phone',
      'Phone Number',
      "The person's phone number.",
      FieldType.PHONE,
      (params, value) => {
        params.phone = value;
        return Promise.resolve(params);
      },
      (params) => params.phone,
    ),
    new PersonField<Stripe.PersonUpdateParams.Dob>(
      'dob',
      'Date of Birth',
      "The person's date of birth.",
      FieldType.DATE,
      (params, value) => {
        params.dob = value;
        return Promise.resolve(params);
      },
      (params) => params.dob,
      new DateAttributes(DateType.DATE_OF_BIRTH),
    ),
    new PersonField<Stripe.PersonUpdateParams.Address>(
      'address',
      'Address',
      "The person's address.",
      FieldType.ADDRESS,
      (params, value) => {
        params.address = value;
        return Promise.resolve(params);
      },
      (params) => params.address,
    ),
    new FieldBundle<Stripe.PersonUpdateParams>('representative', FieldBundleType.PLACEHOKDER, [firstName, lastName]),
  ],
  'relationship',
);

export default PersonSchema;
