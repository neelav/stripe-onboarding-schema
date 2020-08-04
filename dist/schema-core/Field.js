"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./fieldtypes/FieldType");
class Field {
    constructor(id, description, fieldType, attributes) {
        this.id = id;
        this.description = description;
        this.fieldType = fieldType;
        this.attributes = attributes;
    }
    /**
     * Use this method when you want to advertise to the UI that the particular id could not be
     * resolved to a "real" field.
     */
    static unknown(id) {
        return new Field(id, 'field id is not in the schema', FieldType_1.default.UNKNOWN, undefined);
    }
}
exports.default = Field;
