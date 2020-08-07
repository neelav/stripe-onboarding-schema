import Field from '../schema-core/Field';
import Entity from '../schema-core/Entity';
import { notEmpty } from '../util/util';

/**
 * This class exposes access to the underlying entities and fields.
 */
class EntityRegistry<E> {
  readonly #entityLookup: Map<E, Entity<any>>;

  readonly #entityLookupByPrefix: Map<string, Entity<any>>;

  constructor(entityLookup: Map<E, Entity<any>>) {
    EntityRegistry.validate(Array.from(entityLookup.values()));
    this.#entityLookup = entityLookup;

    this.#entityLookupByPrefix = new Map(
      Array.from(entityLookup.values()).map((entity) => [entity.entityPrefix, entity]),
    );
  }

  private static validate(entities: Entity<any>[]): void {
    const allEntityNames = entities.map((e) => e.name);
    this.raiseIfDuplicates(allEntityNames, 'entity names');
    const allEntityPrefixes = entities.map((e) => e.entityPrefix);
    this.raiseIfDuplicates(allEntityPrefixes, 'entity prefixes');
  }

  private static raiseIfDuplicates(items: string[], errorType: string): void {
    const duplicates = items.filter((value, index) => items.indexOf(value) !== index);
    if (duplicates.length > 0) {
      throw new Error(`Found duplicate ${errorType}: ${duplicates}`);
    }
  }

  /**
   *
   * @param token A valid stripe token (e.g. person_123abc) or a placeholder value used to denote
   * a new entity needs to be created.
   */
  lookupEntityByToken(token: string): E | undefined {
    const prefix = token.split('_')[0];
    const entity = this.#entityLookupByPrefix.get(prefix);

    if (!entity) {
      return undefined;
    }

    return notEmpty(Array.from(this.#entityLookup.entries()).find((pair) => pair[1] === entity))[0];
  }

  lookupField(entityName: E, fieldId: string): Field<any, any> | undefined {
    const entity = this.#entityLookup.get(entityName);
    if (!entity) {
      return undefined;
    }

    const field = entity.fields.find((f) => f.id === fieldId);
    if (!field) {
      return undefined;
    }
    return field;
  }
}

export default EntityRegistry;
