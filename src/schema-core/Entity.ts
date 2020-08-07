import Field, { Container } from './Field';

/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
class Entity<T extends Container> {
  readonly id: string;

  readonly name: string;

  readonly description: string;

  readonly entityPrefix: string;

  readonly fields: Field<T, any>[];

  constructor(id: string, name: string, description: string, entityPrefix: string, fields: Field<T, any>[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.entityPrefix = entityPrefix;
    this.fields = fields;
  }
}

export default Entity;
