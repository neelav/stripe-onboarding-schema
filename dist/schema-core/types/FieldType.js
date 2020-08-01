"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FieldType;
(function (FieldType) {
    FieldType[FieldType["TEXT"] = 0] = "TEXT";
    FieldType[FieldType["BOOLEAN"] = 1] = "BOOLEAN";
    FieldType[FieldType["DOCUMENT"] = 2] = "DOCUMENT";
    FieldType[FieldType["NUMBER"] = 3] = "NUMBER";
    FieldType[FieldType["ENUM"] = 4] = "ENUM";
    FieldType[FieldType["ADDRESS"] = 5] = "ADDRESS";
    FieldType[FieldType["UNKNOWN"] = 6] = "UNKNOWN";
})(FieldType || (FieldType = {}));
exports.default = FieldType;
