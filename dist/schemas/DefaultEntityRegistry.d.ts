import EntityRegistry from './EntityRegistry';
import { EntityType } from '../types/types';
/**
 * This registry contains all the standard stripe entities that could be referenced
 * by the requirements hash.
 */
declare class DefaultEntityRegistry extends EntityRegistry<EntityType> {
    static make(): DefaultEntityRegistry;
}
export default DefaultEntityRegistry;
