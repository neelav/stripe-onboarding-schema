import Entity from 'schema-core/Entity';
import EntityRegistry from '../EntityRegistry';

describe('EntityRegistry', () => {
  test('validations', () => {
    const schema = new Entity('test', 'test', 'test', []);
    expect(
      () => new EntityRegistry<string>(
        new Map<string, Entity>([
          ['foo', schema],
          ['bar', schema],
        ]),
      ),
    ).toThrowError('Found duplicate entity names: test');
  });
});
