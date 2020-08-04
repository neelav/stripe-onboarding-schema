"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
class Entity {
    constructor(name, description, entityPrefix, fields) {
        this.name = name;
        this.description = description;
        this.entityPrefix = entityPrefix;
        this.fields = fields;
    }
}
exports.default = Entity;
