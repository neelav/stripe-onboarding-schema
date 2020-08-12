"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A higher order Field which comprises of a set of sub fields.  For example.
 * relationship.owner would be bundle of first_name, last_name, etc.
 */
class FieldBundle {
    constructor(id, fieldBundleType, fields) {
        this.id = id;
        this.fieldBundleType = fieldBundleType;
        this.fields = fields;
    }
}
exports.default = FieldBundle;
