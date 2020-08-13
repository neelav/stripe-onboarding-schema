import FieldBundleType from './fieldtypes/FieldBundleType';
import Field, { Params } from './Field';

/**
 * A higher order Field which comprises of a set of sub fields.  For example.
 * relationship.owner would be bundle of first_name, last_name, etc.
 */
class FieldBundle<P extends Params> {
    readonly id: string

    readonly fieldBundleType: FieldBundleType

    readonly fields: Field<P, any>[]

    constructor(id: string, fieldBundleType: FieldBundleType, fields: Field<P, any>[]) {
      this.id = id;
      this.fieldBundleType = fieldBundleType;
      this.fields = fields;
    }
}

export default FieldBundle;
