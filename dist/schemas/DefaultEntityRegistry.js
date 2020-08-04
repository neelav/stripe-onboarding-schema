"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EntityRegistry_1 = require("./EntityRegistry");
const AccountSchema_1 = require("./AccountSchema");
const types_1 = require("../types/types");
/**
 * This registry contains all the standard stripe entities that could be referenced
 * by the requirements hash.
 */
class DefaultEntityRegistry extends EntityRegistry_1.default {
    static make() {
        return new EntityRegistry_1.default(new Map([
            [types_1.EntityType.ACCOUNT, AccountSchema_1.default],
        ]));
    }
}
exports.default = DefaultEntityRegistry;
