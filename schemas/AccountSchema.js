"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../schema-core/Entity");
const Field_1 = require("../schema-core/Field");
const FieldType_1 = require("../schema-core/fieldtypes/FieldType");
const EnumAttributes_1 = require("../schema-core/fieldtypes/EnumAttributes");
const TextAttributes_1 = require("../schema-core/fieldtypes/TextAttributes");
class AccountField extends Field_1.default {
}
const AccountSchema = new Entity_1.default('account', 'Account', 'A stripe account corresponding to /v1/accounts', 'acct', [
    new AccountField('business_profile.mcc', 'MCC', 'The merchant category code for the account. MCCs are used to classify businesses ' +
        'based on the goods or services they provide.', FieldType_1.default.ENUM, (params, value) => {
        const business_profile = params.business_profile || {};
        business_profile.mcc = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.business_profile) === null || _a === void 0 ? void 0 : _a.mcc; }, new EnumAttributes_1.default([
        { value: '7623', label: 'A/C, Refrigeration Repair' },
        { value: '8931', label: 'Accounting/Bookkeeping Services' },
        { value: '7311', label: 'Advertising Services' },
        { value: '0763', label: 'Agricultural Cooperative' },
    ])),
    new AccountField('business_profile.product_description', 'Product Description', 'Internal-only description of the product sold by, or service provided by, the business.' +
        ' Used by Stripe for risk and underwriting purposes.', FieldType_1.default.TEXT, (params, value) => {
        const business_profile = params.business_profile || {};
        business_profile.product_description = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.business_profile) === null || _a === void 0 ? void 0 : _a.product_description; }, new TextAttributes_1.default(TextAttributes_1.TextType.LONG)),
    new AccountField('business_profile.support_address', 'Support Address', 'A publicly available mailing address for sending support issues to.', FieldType_1.default.ADDRESS, (params, value) => {
        const business_profile = params.business_profile || {};
        business_profile.support_address = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.business_profile) === null || _a === void 0 ? void 0 : _a.support_address; }),
    new AccountField('business_profile.support_email', 'Support Email', 'A publicly available email address for sending support issues to.', FieldType_1.default.EMAIL, (params, value) => {
        const business_profile = params.business_profile || {};
        business_profile.support_email = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.business_profile) === null || _a === void 0 ? void 0 : _a.support_email; }),
    new AccountField('business_profile.support_phone', 'Support Phone', 'A publicly available phone number to call with support issues.', FieldType_1.default.PHONE, (params, value) => {
        const business_profile = params.business_profile || {};
        business_profile.support_phone = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.business_profile) === null || _a === void 0 ? void 0 : _a.support_phone; }),
    new AccountField('business_profile.support_url', 'Support Url', 'A publicly available website for handling support issues.', FieldType_1.default.URL, (params, value) => {
        const business_profile = params.business_profile || {};
        business_profile.support_url = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.business_profile) === null || _a === void 0 ? void 0 : _a.support_url; }),
    new AccountField('business_profile.url', 'Business Url', 'The business’s publicly available website.', FieldType_1.default.URL, (params, value) => {
        const business_profile = params.business_profile || {};
        business_profile.url = value;
        params.business_profile = business_profile;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.business_profile) === null || _a === void 0 ? void 0 : _a.url; }),
    new AccountField('business_type', 'Business Type', 'The business type.', FieldType_1.default.ENUM, (params, value) => {
        params.business_type = value;
        return Promise.resolve(params);
    }, (params) => params.business_type, new EnumAttributes_1.default([
        { value: 'company', label: 'Company' },
        { value: 'government_entity', label: 'Government Entity' },
        { value: 'individual', label: 'Individual' },
        { value: 'non_profit', label: 'Non Profit' },
    ])),
    new AccountField('company.name', 'Name', 'The company’s legal name.', FieldType_1.default.TEXT, (params, value) => {
        const company = params.company || {};
        company.name = value;
        params.company = company;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.company) === null || _a === void 0 ? void 0 : _a.name; }, new TextAttributes_1.default(TextAttributes_1.TextType.SHORT)),
    new AccountField('company.phone', 'Phone Number', 'The company’s phone number (used for verification).', FieldType_1.default.PHONE, (params, value) => {
        const company = params.company || {};
        company.phone = value;
        params.company = company;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.company) === null || _a === void 0 ? void 0 : _a.phone; }),
    new AccountField('company.tax_id', 'Tax ID', 'The business ID number of the company, as appropriate for the company’s ' +
        'country. (Examples are an Employer ID Number in the U.S., a Business Number ' +
        'in Canada, or a Company Number in the UK.)', FieldType_1.default.ID_NUMBER, (container, value) => {
        const company = container.company || {};
        company.tax_id = value;
        container.company = company;
        return Promise.resolve(container);
    }, (container) => { var _a; return (_a = container.company) === null || _a === void 0 ? void 0 : _a.tax_id; }),
    new AccountField('company.address', 'Address', "The company's primary address.", FieldType_1.default.ADDRESS, (params, value) => {
        const company = params.company || {};
        company.address = value;
        params.company = company;
        return Promise.resolve(params);
    }, (params) => { var _a; return (_a = params.company) === null || _a === void 0 ? void 0 : _a.address; }),
]);
exports.default = AccountSchema;
