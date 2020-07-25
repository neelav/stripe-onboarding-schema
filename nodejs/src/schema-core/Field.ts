import FieldType from './FieldType';

class Field {
    id: string;

    description: string;

    fieldType: FieldType;

    // Attributes specific to this field's type
    atrtibutes: Record<string, unknown>;
}

export default Field;
