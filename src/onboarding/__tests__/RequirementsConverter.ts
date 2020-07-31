import DefaultEntityRegistry, { EntityType } from 'schemas/DefaultEntityRegistry';
import OnboardingSchema from 'onboarding/OnboardingSchema';
import { notEmpty } from 'util/util';
import Field from 'schema-core/Field';

import RequirementsConverter from '../RequirementsConverter';

test('basic schema', () => {
  const registry = DefaultEntityRegistry.make();
  const converter = new RequirementsConverter(registry);
  const schema = converter.convertRequirements(
    {
      past_due: ['business_type'],
      currently_due: ['business_type'],
      eventually_due: ['business_type'],
      pending_verification: [],
      errors: [],
      current_deadline: null,
      disabled_reason: 'past_due',
    },
    'past_due',
  );

  expect(schema).toEqual(new OnboardingSchema(new Map([
    [EntityType.ACCOUNT, [notEmpty(registry.lookupField(EntityType.ACCOUNT, 'business_type'))]],
  ])));
});

test('unknown field', () => {
  const registry = DefaultEntityRegistry.make();
  const converter = new RequirementsConverter(registry);
  const schema = converter.convertRequirements(
    {
      past_due: ['business_type', 'unknown_field'],
      currently_due: ['business_type', 'unknown_field'],
      eventually_due: ['business_type', 'unknown_field'],
      pending_verification: [],
      errors: [],
      current_deadline: null,
      disabled_reason: 'past_due',
    },
    'past_due',
  );

  expect(schema).toEqual(new OnboardingSchema(new Map([
    [EntityType.ACCOUNT, [notEmpty(registry.lookupField(EntityType.ACCOUNT, 'business_type'))]],
    [EntityType.UNKNOWN, [Field.unknown('unknown_field')]],
  ])));
});
