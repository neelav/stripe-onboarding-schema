"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../schema-core/Entity");
const Field_1 = require("../schema-core/Field");
const FieldType_1 = require("../schema-core/fieldtypes/FieldType");
const EnumAttributes_1 = require("../schema-core/fieldtypes/EnumAttributes");
const TextAttributes_1 = require("../schema-core/fieldtypes/TextAttributes");
const AccountSchema = new Entity_1.default('account', 'Account', 'A stripe account corresponding to /v1/accounts', 'acct', [
    new Field_1.default('business_profile.product_description', 'Product Description', 'Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.', FieldType_1.default.TEXT, new TextAttributes_1.default(TextAttributes_1.TextType.LONG)),
    new Field_1.default('business_profile.support_address', 'Support Address', 'A publicly available mailing address for sending support issues to.', FieldType_1.default.ADDRESS),
    new Field_1.default('business_profile.support_email', 'Support Email', 'A publicly available email address for sending support issues to.', FieldType_1.default.EMAIL),
    new Field_1.default('business_profile.support_phone', 'Support Phone', 'A publicly available phone number to call with support issues.', FieldType_1.default.PHONE),
    new Field_1.default('business_profile.support_url', 'Support Url', 'A publicly available website for handling support issues.', FieldType_1.default.URL),
    new Field_1.default('business_profile.url', 'Business Url', 'The business’s publicly available website.', FieldType_1.default.URL),
    new Field_1.default('business_type', 'Business Type', 'The business type.', FieldType_1.default.ENUM, new EnumAttributes_1.default([
        { value: 'company', label: 'Company' },
        { value: 'government_entity', label: 'Government Entity' },
        { value: 'individual', label: 'Individual' },
        { value: 'non_profit', label: 'Non Profit' },
    ])),
]);
exports.default = AccountSchema;
