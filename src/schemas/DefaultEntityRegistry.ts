import Entity from '../schema-core/Entity';
import EntityRegistry from './EntityRegistry';
import AccountSchema from './AccountSchema';
import { EntityType } from '../types/types';

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

export default DefaultEntityRegistry;
