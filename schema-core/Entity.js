"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An Entity corresponds to a Stripe resource.  One can think of it as a database table.
 */
class Entity {
    constructor(id, name, description, entityPrefix, fields, alternateRequirementPrefix) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.entityPrefix = entityPrefix;
        this.fields = fields;
        this.alternateRequirementPrefix = alternateRequirementPrefix;
    }
}
exports.default = Entity;
