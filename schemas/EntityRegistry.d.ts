import Field from '../schema-core/Field';
import Entity from '../schema-core/Entity';
/**
 * This class exposes access to the underlying entities and fields.
 */
declare class EntityRegistry<E> {
    #private;
    constructor(entityLookup: Map<E, Entity<unknown>>);
    private static validate;
    private static raiseIfDuplicates;
    /**
     *
     * @param token A valid stripe token (e.g. person_123abc) or a placeholder value used to denote
     * a new entity needs to be created.
     */
    lookupEntityByToken(token: string): E | undefined;
    lookupField(entityName: E, fieldId: string): Field<unknown> | undefined;
}
export default EntityRegistry;
