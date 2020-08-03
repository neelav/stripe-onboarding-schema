"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _entityRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultEntityRegistry_1 = require("../schemas/DefaultEntityRegistry");
const Field_1 = require("../schema-core/Field");
const OnboardingSchema_1 = require("./OnboardingSchema");
/**
 * Given a Stripe Account api response, return a well formed ui schema to be
 * consumed by a rendering layer to render a form.
 */
class RequirementsConverter {
    constructor(entityRegistry) {
        _entityRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _entityRegistry, entityRegistry);
    }
    convertRequirements(requirements, include) {
        const desiredRequirements = requirements[include];
        const requiredFields = (desiredRequirements || []).map((r) => this.convertRequirement(r));
        const fieldMap = requiredFields.reduce((map, field) => {
            const list = map.get(field[0]) || [];
            map.set(field[0], list);
            list.push(field[1]);
            return map;
        }, new Map());
        return new OnboardingSchema_1.default(fieldMap);
    }
    convertRequirement(requirementId) {
        const entityToken = requirementId.includes('.') && requirementId.split('.')[0];
        let entityName;
        if (entityToken) {
            entityName = __classPrivateFieldGet(this, _entityRegistry).lookupEntityByToken(entityToken);
        }
        const fieldId = entityName ? requirementId.substr(requirementId.indexOf('.')) : requirementId;
        const defaultedEntityName = entityName || RequirementsConverter.DEFAULT_ENTITY;
        const field = __classPrivateFieldGet(this, _entityRegistry).lookupField(defaultedEntityName, fieldId);
        return field ? [defaultedEntityName, field]
            : [entityName || DefaultEntityRegistry_1.EntityType.UNKNOWN, Field_1.default.unknown(requirementId)];
    }
}
_entityRegistry = new WeakMap();
RequirementsConverter.DEFAULT_ENTITY = DefaultEntityRegistry_1.EntityType.ACCOUNT;
exports.default = RequirementsConverter;
