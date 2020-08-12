import type Stripe from 'stripe';
import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/fieldtypes/FieldType';
import FieldBundle from '../schema-core/FieldBundle';
import FieldBundleType from '../schema-core/fieldtypes/FieldBundleType';

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
    new FieldBundle<Stripe.Person>('representative', FieldBundleType.CONTAINER, [firstName, lastName]),
  ],
  'relationship',
);

export default PersonSchema;
