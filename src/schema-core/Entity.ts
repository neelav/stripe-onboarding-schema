import Field from './Field';

/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
class Entity {
    readonly id: string

    readonly name: string

    readonly description: string

    readonly entityPrefix: string

    readonly fields: Field[]

    constructor(
      id: string,
      name: string,
      description: string,
      entityPrefix: string,
      fields: Field[],
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.entityPrefix = entityPrefix;
      this.fields = fields;
    }
}

export default Entity;
