import FieldType from './FieldType';

class Field {
    id: String;
    description: String;
    fieldType: FieldType;
    // Attributes specific to this field's type
    atrtibutes: Object;
}

export default Field;