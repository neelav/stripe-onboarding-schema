"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextType = void 0;
var TextType;
(function (TextType) {
    TextType["SHORT"] = "SHORT";
    TextType["LONG"] = "LONG";
})(TextType || (TextType = {}));
exports.TextType = TextType;
class TextAttributes {
    constructor(type) {
        this.type = type;
    }
}
exports.default = TextAttributes;
