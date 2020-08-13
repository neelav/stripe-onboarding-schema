"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FieldType;
(function (FieldType) {
    FieldType["TEXT"] = "TEXT";
    FieldType["BOOLEAN"] = "BOOLEAN";
    // DOCUMENT = 'DOCUMENT',
    FieldType["ENUM"] = "ENUM";
    FieldType["ADDRESS"] = "ADDRESS";
    FieldType["URL"] = "URL";
    FieldType["PHONE"] = "PHONE";
    FieldType["EMAIL"] = "EMAIL";
    FieldType["DATE"] = "DATE";
    FieldType["UNKNOWN"] = "UNKNOWN";
})(FieldType || (FieldType = {}));
exports.default = FieldType;
