import EntityRegistry from 'schemas/EntityRegistry';
import OnboardingSchema from 'onboarding/OnboardingSchema';
import { notEmpty } from 'util/util';
import Field from 'schema-core/Field';
import RequirementsConverter from '../RequirementsConverter';

test('basic schema', () => {
  const registry = EntityRegistry.makeDefault();
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
    ['account', [notEmpty(registry.lookupField('account', 'business_type'))]],
  ])));
});

test('unknown field', () => {
  const registry = EntityRegistry.makeDefault();
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
    ['account', [notEmpty(registry.lookupField('account', 'business_type'))]],
    ['__UNKNOWN__', [Field.unknown('unknown_field')]],
  ])));
});
