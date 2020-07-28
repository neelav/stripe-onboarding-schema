import Field from 'schema-core/Field';
import Entity from 'schema-core/Entity';
import AccountSchema from './AccountSchema';

/**
 * This class exposes access to the underlying entities and fields.
 */
class EntityRegistry {
    readonly #entityLookup: Map<string, Entity>

    readonly #entityLookupByPrefix: Map<string, Entity>

    constructor(entities: Entity[]) {
      EntityRegistry.validate(entities);
      this.#entityLookup = new Map(
        entities.map((entity) => [entity.name, entity]),
      );

      this.#entityLookupByPrefix = new Map(
        entities.map((entity) => [entity.entityPrefix, entity]),
      );
    }

    private static validate(entities: Entity[]): void {
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

    public static makeDefault(): EntityRegistry {
      return new EntityRegistry([
        AccountSchema,
      ]);
    }

    lookupEntityByToken(token: string): string | undefined {
      const prefix = token.split('_')[0];
      return this.#entityLookupByPrefix.get(prefix)?.name;
    }

    lookupField(entityName: string, fieldId: string): [Entity, Field] | undefined {
      const entity = this.#entityLookup.get(entityName);
      if (!entity) {
        return undefined;
      }

      const field = entity.fields.find((f) => f.id === fieldId);
      if (!field) {
        return undefined;
      }
      return [entity, field];
    }
}

export default EntityRegistry;
