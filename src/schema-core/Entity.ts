import Field, { Container } from './Field';
import FieldBundle from './FieldBundle';

export type FieldOrBundle<C extends Container> = Field<C, any> | FieldBundle<C>;
/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
class Entity<C extends Container> {
  readonly id: string;

  readonly name: string;

  readonly description: string;

  readonly entityPrefix: string;

  readonly fields: FieldOrBundle<C>[];

  readonly alternateRequirementPrefix?: string;

  constructor(
    id: string,
    name: string,
    description: string,
    entityPrefix: string,
    fields: FieldOrBundle<C>[],
    alternateRequirementPrefix?: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.entityPrefix = entityPrefix;
    this.fields = fields;
    this.alternateRequirementPrefix = alternateRequirementPrefix;
  }
}

export default Entity;
