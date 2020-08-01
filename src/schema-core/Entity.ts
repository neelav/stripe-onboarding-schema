import Field from './Field';

/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
class Entity {
    readonly name: string

    readonly description: string

    readonly entityPrefix: string

    readonly fields: Field[]

    constructor(name: string, description: string, entityPrefix: string, fields: Field[]) {
      this.name = name;
      this.description = description;
      this.entityPrefix = entityPrefix;
      this.fields = fields;
    }
}

export default Entity;
