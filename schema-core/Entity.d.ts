import Field from './Field';
/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
declare class Entity {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly entityPrefix: string;
    readonly fields: Field[];
    constructor(id: string, name: string, description: string, entityPrefix: string, fields: Field[]);
}
export default Entity;
