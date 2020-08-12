import type Stripe from 'stripe';
import Entity from '../schema-core/Entity';
import Field from '../schema-core/Field';
import FieldType from '../schema-core/fieldtypes/FieldType';

const PersonSchema = new Entity<Stripe.Person>(
  'person',
  'Person',
  'A stripe person corresponding to /v1/persons',
  'person',
  [
    new Field<Stripe.Person, string>(
      'first_name',
      'First Name',
      'The person\'s first name.',
      FieldType.TEXT,
      (container, value) => {
        container.first_name = value;
        return Promise.resolve(container);
      },
      (container) => container.first_name,
    ),
    new Field<Stripe.Person, string>(
      'last_name',
      'Last Name',
      'The person\'s last name.',
      FieldType.TEXT,
      (container, value) => {
        container.last_name = value;
        return Promise.resolve(container);
      },
      (container) => container.last_name,
    ),
  ],
  'relationship',
);

export default PersonSchema;
