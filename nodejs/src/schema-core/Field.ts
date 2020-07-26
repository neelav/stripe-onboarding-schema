import FieldType from './types/FieldType';
import EnumAttributes from './types/EnumAttributes';

type Attributes = EnumAttributes

class Field {
    id: string

    description: string

    fieldType: FieldType

    // Attributes specific to this field's type
    attributes?: Attributes

    constructor(id: string, description: string, fieldType: FieldType, attributes: Attributes) {
      this.id = id;
      this.description = description;
      this.fieldType = fieldType;
      this.attributes = attributes;
    }
}

export default Field;
