import Stripe from 'stripe';
import DefaultEntityRegistry from '../../schemas/DefaultEntityRegistry';
import OnboardingSchema from '../OnboardingSchema';
import { notEmpty } from '../../util/util';
import Field from '../../schema-core/Field';

import RequirementsConverter from '../RequirementsConverter';
import { RequirementsType, EntityType, Requirement } from '../../types/types';

test('basic schema', () => {
  const registry = DefaultEntityRegistry.make();
  const converter = new RequirementsConverter(registry);
  const schema = converter.convertRequirements(
    'acct_123abc',
    {
      past_due: ['business_type', 'relationship.representative', 'person_123.address.city', 'person_123.address.line1'],
      currently_due: [
        'business_type',
        'relationship.representative',
        'person_123.address.city',
        'person_123.address.line1',
      ],
      eventually_due: [
        'business_type',
        'relationship.representative',
        'person_123.address.city',
        'person_123.address.line1',
      ],
      pending_verification: [],
      errors: [],
      current_deadline: null,
      disabled_reason: 'past_due',
    },
    RequirementsType.PAST_DUE,
  );

  expect(schema).toEqual(
    new OnboardingSchema(
      new Map([
        [
          EntityType.ACCOUNT,
          [
            new Requirement(
              'business_type',
              EntityType.ACCOUNT,
              notEmpty(registry.lookupFieldOrBundle(EntityType.ACCOUNT, 'business_type')),
              'acct_123abc',
            ),
          ],
        ],
        [
          EntityType.PERSON,
          [
            new Requirement(
              'relationship.representative',
              EntityType.PERSON,
              notEmpty(registry.lookupFieldOrBundle(EntityType.PERSON, 'representative')),
            ),
            new Requirement(
              'person_123.address.city',
              EntityType.PERSON,
              notEmpty(registry.lookupFieldOrBundle(EntityType.PERSON, 'address')),
              'person_123',
            ),
          ],
        ],
      ]),
    ),
  );
});

test('unknown field', () => {
  const registry = DefaultEntityRegistry.make();
  const converter = new RequirementsConverter(registry);
  const schema = converter.convertRequirements(
    'acct_123abc',
    {
      past_due: ['business_type', 'unknown_field'],
      currently_due: ['business_type', 'unknown_field'],
      eventually_due: ['business_type', 'unknown_field'],
      pending_verification: [],
      errors: [],
      current_deadline: null,
      disabled_reason: 'past_due',
    },
    RequirementsType.PAST_DUE,
  );

  expect(schema).toEqual(
    new OnboardingSchema(
      new Map([
        [
          EntityType.ACCOUNT,
          [
            new Requirement(
              'business_type',
              EntityType.ACCOUNT,
              notEmpty(registry.lookupFieldOrBundle(EntityType.ACCOUNT, 'business_type')),
              'acct_123abc',
            ),
          ],
        ],
        [
          EntityType.UNKNOWN,
          [new Requirement('unknown_field', EntityType.UNKNOWN, Field.unknown('unknown_field'), 'acct_123abc')],
        ],
      ]),
    ),
  );
});

test('setValue', () => {
  const registry = DefaultEntityRegistry.make();
  const converter = new RequirementsConverter(registry);
  const schema = converter.convertRequirements(
    'acct_123abc',
    {
      past_due: ['business_type'],
      currently_due: ['business_type'],
      eventually_due: ['business_type'],
      pending_verification: [],
      errors: [],
      current_deadline: null,
      disabled_reason: 'past_due',
    },
    RequirementsType.PAST_DUE,
  );

  const container = {} as Stripe.Account;
  const field = Array.from(schema.fieldMap.values())[0][0].field as Field<any, any>;
  RequirementsConverter.setValue(field, container, 'company');
  expect(container).toEqual({ business_type: 'company' });
});

test('getValue', () => {
  const registry = DefaultEntityRegistry.make();
  const converter = new RequirementsConverter(registry);
  const schema = converter.convertRequirements(
    'acct_123abc',
    {
      past_due: ['business_type'],
      currently_due: ['business_type'],
      eventually_due: ['business_type'],
      pending_verification: [],
      errors: [],
      current_deadline: null,
      disabled_reason: 'past_due',
    },
    RequirementsType.PAST_DUE,
  );

  const container = { business_type: 'company' } as Stripe.Account;
  const field = Array.from(schema.fieldMap.values())[0][0].field as Field<any, any>;
  const value = RequirementsConverter.getValue(field, container);
  expect(value).toEqual('company');
});

test('getValue on unset field', async () => {
  const registry = DefaultEntityRegistry.make();
  const converter = new RequirementsConverter(registry);
  const schema = converter.convertRequirements(
    'acct_123abc',
    {
      past_due: ['business_type'],
      currently_due: ['business_type'],
      eventually_due: ['business_type'],
      pending_verification: [],
      errors: [],
      current_deadline: null,
      disabled_reason: 'past_due',
    },
    RequirementsType.PAST_DUE,
  );

  const container = {} as Stripe.Account;
  const field = Array.from(schema.fieldMap.values())[0][0].field as Field<any, any>;
  const value = await RequirementsConverter.getValue(field, container);
  expect(value).toBeUndefined();
});
