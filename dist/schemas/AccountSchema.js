"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../schema-core/Entity");
const Field_1 = require("../schema-core/Field");
const FieldType_1 = require("../schema-core/fieldtypes/FieldType");
const EnumAttributes_1 = require("../schema-core/fieldtypes/EnumAttributes");
const AccountSchema = new Entity_1.default('account', 'A stripe account corresponding to /v1/accounts', 'acct', [
    new Field_1.default('business_type', 'The business type.', FieldType_1.default.ENUM, new EnumAttributes_1.default([
        { value: 'company', label: 'Company' },
        { value: 'government_entity', label: 'Government Entity' },
        { value: 'individual', label: 'Individual' },
        { value: 'non_profit', label: 'Non Profit' },
    ])),
]);
exports.default = AccountSchema;
