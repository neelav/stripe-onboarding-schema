import Entity from 'schema-core/Entity';
import EntityRegistry from '../EntityRegistry';

describe('EntityRegistry', () => {
  test('basic lookup', () => {
    const registry = EntityRegistry.makeDefault();
    const businessTypeField = registry.lookupField('account', 'business_type');
    expect(businessTypeField).toBeTruthy();
  });

  test('failed lookups', () => {
    const registry = EntityRegistry.makeDefault();
    expect(registry.lookupField('bogus', 'business_type')).toBeUndefined();
    expect(registry.lookupField('account', 'bogus')).toBeUndefined();
  });

  test('lookupEntityByToken', () => {
    const registry = EntityRegistry.makeDefault();
    expect(registry.lookupEntityByToken('person_123')).toBeUndefined();
  });

  test('validations', () => {
    const schema = new Entity('test', 'test', 'test', []);
    expect(() => new EntityRegistry([schema, schema])).toThrowError('Found duplicate entity names: test');
  });
});
