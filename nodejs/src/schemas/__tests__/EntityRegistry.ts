import EntityRegistry from '../EntityRegistry';

describe('EntityRegistry', () => {
  test('basic lookup', () => {
    const registry = EntityRegistry.makeDefault();
    const businessTypeField = registry.lookupField('account', 'business_type');
    expect(businessTypeField).toBeTruthy();
  });
});
