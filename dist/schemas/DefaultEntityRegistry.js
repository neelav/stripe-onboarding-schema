"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityType = void 0;
const EntityRegistry_1 = require("./EntityRegistry");
const AccountSchema_1 = require("./AccountSchema");
var EntityType;
(function (EntityType) {
    EntityType["ACCOUNT"] = "ACCOUNT";
    EntityType["UNKNOWN"] = "UNKNOWN";
})(EntityType || (EntityType = {}));
exports.EntityType = EntityType;
/**
 * This registry contains all the standard stripe entities that could be referenced
 * by the requirements hash.
 */
class DefaultEntityRegistry extends EntityRegistry_1.default {
    static make() {
        return new EntityRegistry_1.default(new Map([
            [EntityType.ACCOUNT, AccountSchema_1.default],
        ]));
    }
}
exports.default = DefaultEntityRegistry;
