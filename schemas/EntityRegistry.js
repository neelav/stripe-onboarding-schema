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
var _entityLookup, _entityLookupByPrefix, _entityLookupByAlternatePrefix;
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
/**
 * This class exposes access to the underlying entities and fields.
 */
class EntityRegistry {
    constructor(entityLookup) {
        _entityLookup.set(this, void 0);
        _entityLookupByPrefix.set(this, void 0);
        _entityLookupByAlternatePrefix.set(this, void 0);
        EntityRegistry.validate(Array.from(entityLookup.values()));
        __classPrivateFieldSet(this, _entityLookup, entityLookup);
        __classPrivateFieldSet(this, _entityLookupByPrefix, new Map(Array.from(entityLookup.values()).map((entity) => [entity.entityPrefix, entity])));
        __classPrivateFieldSet(this, _entityLookupByAlternatePrefix, new Map(Array.from(entityLookup.values())
            .filter((e) => e.alternateRequirementPrefix)
            .map((entity) => [util_1.notEmpty(entity.alternateRequirementPrefix), entity])));
    }
    static validate(entities) {
        const allEntityNames = entities.map((e) => e.name);
        this.raiseIfDuplicates(allEntityNames, 'entity names');
        const allEntityPrefixes = entities.map((e) => e.entityPrefix);
        this.raiseIfDuplicates(allEntityPrefixes, 'entity prefixes');
    }
    static raiseIfDuplicates(items, errorType) {
        const duplicates = items.filter((value, index) => items.indexOf(value) !== index);
        if (duplicates.length > 0) {
            throw new Error(`Found duplicate ${errorType}: ${duplicates}`);
        }
    }
    /**
     *
     * @param token A stripe token (e.g. person_123abc)
     */
    lookupEntityByToken(token) {
        const prefix = token.split('_')[0];
        const entity = __classPrivateFieldGet(this, _entityLookupByPrefix).get(prefix);
        if (!entity) {
            return undefined;
        }
        return util_1.notEmpty(Array.from(__classPrivateFieldGet(this, _entityLookup).entries()).find((pair) => pair[1] === entity))[0];
    }
    /**
     * @param prefix A placeholder value used to denote a new entity needs to be created. See PersonSchema for
     * an example.
     */
    lookupEntityByAlternatePrefix(prefix) {
        const entity = __classPrivateFieldGet(this, _entityLookupByAlternatePrefix).get(prefix);
        if (!entity) {
            return undefined;
        }
        return util_1.notEmpty(Array.from(__classPrivateFieldGet(this, _entityLookup).entries()).find((pair) => pair[1] === entity))[0];
    }
    lookupFieldOrBundle(entityName, fieldId) {
        const entity = __classPrivateFieldGet(this, _entityLookup).get(entityName);
        if (!entity) {
            return undefined;
        }
        const field = entity.fields.find((f) => f.id === fieldId);
        if (!field) {
            return undefined;
        }
        return field;
    }
}
_entityLookup = new WeakMap(), _entityLookupByPrefix = new WeakMap(), _entityLookupByAlternatePrefix = new WeakMap();
exports.default = EntityRegistry;
