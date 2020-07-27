import Field from 'schema-core/Field';
import Entity from 'schema-core/Entity';

/**
 * This class exposes access to the underlying entities and fields.
 */
class EntityRegistry {
    readonly #entities: Entity[]

    readonly #fieldLookup: Map<string, Field>

    readonly #fieldToEntity: Map<Field, Entity>

    constructor(entities: Entity[]) {
      EntityRegistry.validate(entities);
      this.#entities = entities;
      this.#fieldLookup = new Map(entities.flatMap((e) => e.fields).map((f) => [f.id, f]));
      this.#fieldToEntity = new Map(
        entities.flatMap((entity) => entity.fields.map((field) => [field, entity])),
      );
    }

    private static validate(entities: Entity[]): void {
      const allFields = entities.flatMap((e) => e.fields).map((f) => f.id);
      const duplicates = allFields.filter((id, index) => allFields.indexOf(id) !== index);
      if (duplicates.length > 0) {
        throw new Error(`Found duplicate field ids in entities: ${duplicates}`);
      }
    }

    lookupField(fieldId: string): [Entity, Field] | undefined {
      const field = this.#fieldLookup.get(fieldId);
      if (!field) {
        return undefined;
      }

      const entity = this.#fieldToEntity.get(field);
      if (!entity) {
        throw new Error(`Cannot find field: ${field}`);
      }
      return [entity, field];
    }
}

export default EntityRegistry;
