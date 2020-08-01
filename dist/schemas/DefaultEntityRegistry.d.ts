import EntityRegistry from './EntityRegistry';
declare enum EntityType {
    ACCOUNT = 0,
    UNKNOWN = 1
}
/**
 * This registry contains all the standard stripe entities that could be referenced
 * by the requirements hash.
 */
declare class DefaultEntityRegistry extends EntityRegistry<EntityType> {
    static make(): DefaultEntityRegistry;
}
export { EntityType };
export default DefaultEntityRegistry;
