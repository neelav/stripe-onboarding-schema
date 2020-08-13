import Field, { Params } from './Field';
import FieldBundle from './FieldBundle';

export type FieldOrBundle<P extends Params> = Field<P, any> | FieldBundle<P>;
/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
class Entity<P extends Params> {
  readonly id: string;

  readonly name: string;

  readonly description: string;

  readonly entityPrefix: string;

  readonly fields: FieldOrBundle<P>[];

  readonly alternateRequirementPrefix?: string;

  constructor(
    id: string,
    name: string,
    description: string,
    entityPrefix: string,
    fields: FieldOrBundle<P>[],
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
