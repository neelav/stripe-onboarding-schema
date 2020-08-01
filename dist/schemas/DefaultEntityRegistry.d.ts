import EntityRegistry from './EntityRegistry';
declare enum EntityType {
    ACCOUNT = "ACCOUNT",
    UNKNOWN = "UNKNOWN"
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
