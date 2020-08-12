import Field, { Container } from './Field';
import FieldBundle from './FieldBundle';
export declare type FieldOrBundle<C extends Container> = Field<C, any> | FieldBundle<C>;
/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
declare class Entity<C extends Container> {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly entityPrefix: string;
    readonly fields: FieldOrBundle<C>[];
    readonly alternateRequirementPrefix?: string;
    constructor(id: string, name: string, description: string, entityPrefix: string, fields: FieldOrBundle<C>[], alternateRequirementPrefix?: string);
}
export default Entity;
