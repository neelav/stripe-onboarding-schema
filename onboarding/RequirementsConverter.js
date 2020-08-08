"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const Field_1 = require("../schema-core/Field");
const OnboardingSchema_1 = require("./OnboardingSchema");
const types_1 = require("../types/types");
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
        const fieldMap = requiredFields.reduce((map, requirement) => {
            const list = map.get(requirement.entityType) || [];
            map.set(requirement.entityType, list);
            list.push(requirement);
            return map;
        }, new Map());
        return new OnboardingSchema_1.default(fieldMap);
    }
    static setValue(field, container, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return field.setValue(container, value);
        });
    }
    static getValue(field, container) {
        return __awaiter(this, void 0, void 0, function* () {
            return field.getValue(container);
        });
    }
    convertRequirement(requirementId) {
        let entityToken = requirementId.includes('.') ? requirementId.split('.')[0] : undefined;
        let entityName;
        if (entityToken) {
            entityName = __classPrivateFieldGet(this, _entityRegistry).lookupEntityByToken(entityToken);
        }
        const fieldId = entityName ? requirementId.substr(requirementId.indexOf('.')) : requirementId;
        const defaultedEntityName = entityName || RequirementsConverter.DEFAULT_ENTITY;
        const field = __classPrivateFieldGet(this, _entityRegistry).lookupField(defaultedEntityName, fieldId);
        entityToken = entityName ? entityToken : undefined;
        return field
            ? new types_1.Requirement(requirementId, defaultedEntityName, field, entityToken)
            : new types_1.Requirement(requirementId, types_1.EntityType.UNKNOWN, Field_1.default.unknown(requirementId));
    }
}
_entityRegistry = new WeakMap();
RequirementsConverter.DEFAULT_ENTITY = types_1.EntityType.ACCOUNT;
exports.default = RequirementsConverter;
