"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notEmpty = exports.assertNever = void 0;
function assertNever(x) {
    throw new Error(`Unexpected object: ${x}`);
}
exports.assertNever = assertNever;
function notEmpty(x) {
    if (!x) {
        throw new Error('Non empty value expected');
    }
    return x;
}
exports.notEmpty = notEmpty;
