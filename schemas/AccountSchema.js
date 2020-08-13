"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../schema-core/Entity");
const Field_1 = require("../schema-core/Field");
const FieldType_1 = require("../schema-core/fieldtypes/FieldType");
const EnumAttributes_1 = require("../schema-core/fieldtypes/EnumAttributes");
const TextAttributes_1 = require("../schema-core/fieldtypes/TextAttributes");
const AccountSchema = new Entity_1.default('account', 'Account', 'A stripe account corresponding to /v1/accounts', 'acct', [
    new Field_1.default('business_profile.product_description', 'Product Description', 'Internal-only description of the product sold by, or service provided by, the business.' +
        ' Used by Stripe for risk and underwriting purposes.', FieldType_1.default.TEXT, (container, value) => {
        const business_profile = container.business_profile || {};
        business_profile.product_description = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.business_profile) === null || _a === void 0 ? void 0 : _a.product_description; }, new TextAttributes_1.default(TextAttributes_1.TextType.LONG)),
    new Field_1.default('business_profile.support_address', 'Support Address', 'A publicly available mailing address for sending support issues to.', FieldType_1.default.ADDRESS, (container, value) => {
        const business_profile = container.business_profile || {};
        business_profile.support_address = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.business_profile) === null || _a === void 0 ? void 0 : _a.support_address; }),
    new Field_1.default('business_profile.support_email', 'Support Email', 'A publicly available email address for sending support issues to.', FieldType_1.default.EMAIL, (container, value) => {
        const business_profile = container.business_profile || {};
        business_profile.support_email = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.business_profile) === null || _a === void 0 ? void 0 : _a.support_email; }),
    new Field_1.default('business_profile.support_phone', 'Support Phone', 'A publicly available phone number to call with support issues.', FieldType_1.default.PHONE, (container, value) => {
        const business_profile = container.business_profile || {};
        business_profile.support_phone = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.business_profile) === null || _a === void 0 ? void 0 : _a.support_phone; }),
    new Field_1.default('business_profile.support_url', 'Support Url', 'A publicly available website for handling support issues.', FieldType_1.default.URL, (container, value) => {
        const business_profile = container.business_profile || {};
        business_profile.support_url = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.business_profile) === null || _a === void 0 ? void 0 : _a.support_url; }),
    new Field_1.default('business_profile.url', 'Business Url', 'The business’s publicly available website.', FieldType_1.default.URL, (container, value) => {
        const business_profile = container.business_profile || {};
        business_profile.url = value;
        container.business_profile = business_profile;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.business_profile) === null || _a === void 0 ? void 0 : _a.url; }),
    new Field_1.default('business_type', 'Business Type', 'The business type.', FieldType_1.default.ENUM, (container, value) => {
        container.business_type = value;
        return Promise.resolve(container);
    }, (container) => container.business_type, new EnumAttributes_1.default([
        { value: 'company', label: 'Company' },
        { value: 'government_entity', label: 'Government Entity' },
        { value: 'individual', label: 'Individual' },
        { value: 'non_profit', label: 'Non Profit' },
    ])),
    new Field_1.default('company.address', 'Address', "The company's primary address.", FieldType_1.default.ADDRESS, (container, value) => {
        const company = container.company || {};
        company.address = value;
        container.company = company;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.company) === null || _a === void 0 ? void 0 : _a.address; }),
]);
exports.default = AccountSchema;
