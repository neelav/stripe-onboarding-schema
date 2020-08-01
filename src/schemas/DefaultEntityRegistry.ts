import Entity from '../schema-core/Entity';
import EntityRegistry from './EntityRegistry';
import AccountSchema from './AccountSchema';

enum EntityType {
    ACCOUNT,
    UNKNOWN
}

/**
 * This registry contains all the standard stripe entities that could be referenced
 * by the requirements hash.
 */
class DefaultEntityRegistry extends EntityRegistry<EntityType> {
  public static make(): DefaultEntityRegistry {
    return new EntityRegistry<EntityType>(new Map<EntityType, Entity>([
      [EntityType.ACCOUNT, AccountSchema],
    ]));
  }
}

export { EntityType };
export default DefaultEntityRegistry;
