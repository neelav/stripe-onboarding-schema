import DefaultEntityRegistry from '../../schemas/DefaultEntityRegistry';
import OnboardingSchema from '../OnboardingSchema';
import { notEmpty } from '../../util/util';
import Field from '../../schema-core/Field';

import RequirementsConverter from '../RequirementsConverter';
import { RequirementsType, EntityType } from '../../types/types';

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
    RequirementsType.PAST_DUE,
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
    RequirementsType.PAST_DUE,
  );

  expect(schema).toEqual(new OnboardingSchema(new Map([
    [EntityType.ACCOUNT, [notEmpty(registry.lookupField(EntityType.ACCOUNT, 'business_type'))]],
    [EntityType.UNKNOWN, [Field.unknown('unknown_field')]],
  ])));
});
