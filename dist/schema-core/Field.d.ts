import FieldType from './fieldtypes/FieldType';
import EnumAttributes from './fieldtypes/EnumAttributes';
declare type Attributes = EnumAttributes;
declare class Field {
    readonly id: string;
    readonly description: string;
    readonly fieldType: FieldType;
    readonly attributes?: Attributes;
    constructor(id: string, description: string, fieldType: FieldType, attributes?: Attributes);
    /**
     * Use this method when you want to advertise to the UI that the particular id could not be
     * resolved to a "real" field.
     */
    static unknown(id: string): Field;
}
export default Field;
