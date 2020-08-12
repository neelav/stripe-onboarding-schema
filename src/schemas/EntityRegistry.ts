import Entity, { FieldOrBundle } from '../schema-core/Entity';
import { notEmpty } from '../util/util';

/**
 * This class exposes access to the underlying entities and fields.
 */
class EntityRegistry<E> {
  readonly #entityLookup: Map<E, Entity<any>>;

  readonly #entityLookupByPrefix: Map<string, Entity<any>>;

  readonly #entityLookupByAlternatePrefix: Map<string, Entity<any>>;

  constructor(entityLookup: Map<E, Entity<any>>) {
    EntityRegistry.validate(Array.from(entityLookup.values()));
    this.#entityLookup = entityLookup;

    this.#entityLookupByPrefix = new Map(
      Array.from(entityLookup.values()).map((entity) => [entity.entityPrefix, entity]),
    );

    this.#entityLookupByAlternatePrefix = new Map(
      Array.from(entityLookup.values())
        .filter((e) => e.alternateRequirementPrefix)
        .map((entity) => [notEmpty(entity.alternateRequirementPrefix), entity]),
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
   * @param token A stripe token (e.g. person_123abc)
   */
  lookupEntityByToken(token: string): E | undefined {
    const prefix = token.split('_')[0];
    const entity = this.#entityLookupByPrefix.get(prefix);
    if (!entity) {
      return undefined;
    }

    return notEmpty(Array.from(this.#entityLookup.entries()).find((pair) => pair[1] === entity))[0];
  }

  /**
   * @param prefix A placeholder value used to denote a new entity needs to be created. See PersonSchema for
   * an example.
   */
  lookupEntityByAlternatePrefix(prefix: string): E | undefined {
    const entity = this.#entityLookupByAlternatePrefix.get(prefix);
    if (!entity) {
      return undefined;
    }

    return notEmpty(Array.from(this.#entityLookup.entries()).find((pair) => pair[1] === entity))[0];
  }

  lookupFieldOrBundle(entityName: E, fieldId: string): FieldOrBundle<any> | undefined {
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
