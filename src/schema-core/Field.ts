import FieldType from './fieldtypes/FieldType';
import EnumAttributes from './fieldtypes/EnumAttributes';
import TextAttributes from './fieldtypes/TextAttributes';

type Attributes = EnumAttributes | TextAttributes

class Field {
    readonly id: string

    readonly name: string

    readonly description: string

    readonly fieldType: FieldType

    // Attributes specific to this field's type
    readonly attributes?: Attributes

    constructor(
      id: string,
      name: string,
      description: string,
      fieldType: FieldType,
      attributes?: Attributes,
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.fieldType = fieldType;
      this.attributes = attributes;
    }

    /**
     * Use this method when you want to advertise to the UI that the particular id could not be
     * resolved to a "real" field.
     */
    static unknown(id: string): Field {
      return new Field(id, 'Unknown', 'field id is not in the schema', FieldType.UNKNOWN, undefined);
    }
}

export default Field;
