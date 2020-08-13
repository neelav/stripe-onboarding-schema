"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requirement = exports.Country = exports.RequirementsType = exports.EntityType = void 0;
var EntityType;
(function (EntityType) {
    EntityType["ACCOUNT"] = "ACCOUNT";
    EntityType["PERSON"] = "PERSON";
    EntityType["UNKNOWN"] = "UNKNOWN";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var RequirementsType;
(function (RequirementsType) {
    RequirementsType["PAST_DUE"] = "past_due";
    RequirementsType["CURRENTLY_DUE"] = "currently_due";
    RequirementsType["EVENTUALLY_DUE"] = "eventually_due";
})(RequirementsType = exports.RequirementsType || (exports.RequirementsType = {}));
var Country;
(function (Country) {
    Country["US"] = "US";
    Country["CA"] = "CA";
    Country["GB"] = "GB";
    Country["FR"] = "FR";
})(Country = exports.Country || (exports.Country = {}));
class Requirement {
    constructor(requirementId, entityType, field, entityToken) {
        this.requirementId = requirementId;
        this.entityType = entityType;
        this.field = field;
        this.entityToken = entityToken;
    }
}
exports.Requirement = Requirement;
