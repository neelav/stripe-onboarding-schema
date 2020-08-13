"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateType = void 0;
var DateType;
(function (DateType) {
    DateType["DATE_OF_BIRTH"] = "DATE_OF_BIRTH";
})(DateType || (DateType = {}));
exports.DateType = DateType;
class DateAttributes {
    constructor(type) {
        this.type = type;
    }
}
exports.default = DateAttributes;
