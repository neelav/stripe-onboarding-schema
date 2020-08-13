import FieldBundleType from './fieldtypes/FieldBundleType';
import Field, { Container } from './Field';
/**
 * A higher order Field which comprises of a set of sub fields.  For example.
 * relationship.owner would be bundle of first_name, last_name, etc.
 */
declare class FieldBundle<C extends Container> {
    readonly id: string;
    readonly fieldBundleType: FieldBundleType;
    readonly fields: Field<C, any>[];
    constructor(id: string, fieldBundleType: FieldBundleType, fields: Field<C, any>[]);
}
export default FieldBundle;
