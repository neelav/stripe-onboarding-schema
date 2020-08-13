import type Stripe from 'stripe';
import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/fieldtypes/FieldType';
import FieldBundle from '../schema-core/FieldBundle';
import FieldBundleType from '../schema-core/fieldtypes/FieldBundleType';
import TextAttributes, { TextType } from '../schema-core/fieldtypes/TextAttributes';
import DateAttributes, { DateType } from '../schema-core/fieldtypes/DateAttributes';

const firstName = new Field<Stripe.Person, string>(
  'first_name',
  'First Name',
  "The person's first name.",
  FieldType.TEXT,
  (container, value) => {
    container.first_name = value;
    return Promise.resolve(container);
  },
  (container) => container.first_name,
  new TextAttributes(TextType.SHORT),
);

const lastName = new Field<Stripe.Person, string>(
  'last_name',
  'Last Name',
  "The person's last name.",
  FieldType.TEXT,
  (container, value) => {
    container.last_name = value;
    return Promise.resolve(container);
  },
  (container) => container.last_name,
  new TextAttributes(TextType.SHORT),
);

const PersonSchema = new Entity<Stripe.Person>(
  'person',
  'Person',
  'A stripe person corresponding to /v1/persons',
  'person',
  [
    firstName,
    lastName,
    new Field<Stripe.Person, string>(
      'email',
      'Email',
      "The person's email address.",
      FieldType.EMAIL,
      (container, value) => {
        container.email = value;
        return Promise.resolve(container);
      },
      (container) => container.email,
    ),
    new Field<Stripe.Person, string>(
      'phone',
      'Phone Number',
      "The person's phone number.",
      FieldType.PHONE,
      (container, value) => {
        container.phone = value;
        return Promise.resolve(container);
      },
      (container) => container.phone,
    ),
    new Field<Stripe.Person, Stripe.Person.Dob>(
      'dob',
      'Date of Birth',
      "The person's date of birth.",
      FieldType.DATE,
      (container, value) => {
        container.dob = value;
        return Promise.resolve(container);
      },
      (container) => container.dob,
      new DateAttributes(DateType.DATE_OF_BIRTH),
    ),
    new Field<Stripe.Person, Stripe.Address>(
      'address',
      'Address',
      "The person's address.",
      FieldType.ADDRESS,
      (container, value) => {
        container.address = value;
        return Promise.resolve(container);
      },
      (container) => container.address,
    ),
    new FieldBundle<Stripe.Person>('representative', FieldBundleType.PLACEHOKDER, [firstName, lastName]),
  ],
  'relationship',
);

export default PersonSchema;
