import Entity, { FieldOrBundle } from '../schema-core/Entity';
/**
 * This class exposes access to the underlying entities and fields.
 */
declare class EntityRegistry<E> {
    #private;
    constructor(entityLookup: Map<E, Entity<any>>);
    private static validate;
    private static raiseIfDuplicates;
    /**
     *
     * @param token A stripe token (e.g. person_123abc)
     */
    lookupEntityByToken(token: string): E | undefined;
    /**
     * @param prefix A placeholder value used to denote a new entity needs to be created. See PersonSchema for
     * an example.
     */
    lookupEntityByAlternatePrefix(prefix: string): E | undefined;
    lookupFieldOrBundle(entityName: E, fieldId: string): FieldOrBundle<any> | undefined;
}
export default EntityRegistry;
