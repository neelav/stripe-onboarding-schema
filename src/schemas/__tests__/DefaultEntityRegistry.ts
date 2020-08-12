import DefaultEntityRegistry from '../DefaultEntityRegistry';
import { EntityType } from '../../types/types';

describe('DefaultEntityRegistry', () => {
  test('basic lookup', () => {
    const registry = DefaultEntityRegistry.make();
    const businessTypeField = registry.lookupField(EntityType.ACCOUNT, 'business_type');
    expect(businessTypeField).toBeTruthy();
  });

  test('failed lookups', () => {
    const registry = DefaultEntityRegistry.make();
    expect(registry.lookupField(EntityType.UNKNOWN, 'business_type')).toBeUndefined();
    expect(registry.lookupField(EntityType.ACCOUNT, 'bogus')).toBeUndefined();
  });

  test('lookupEntityByToken', () => {
    const registry = DefaultEntityRegistry.make();
    expect(registry.lookupEntityByToken('person_123')).toBe(EntityType.PERSON);
  });
});