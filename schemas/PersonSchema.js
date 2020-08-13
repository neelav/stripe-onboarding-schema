"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../schema-core/Entity");
const Field_1 = require("../schema-core/Field");
const FieldType_1 = require("../schema-core/fieldtypes/FieldType");
const FieldBundle_1 = require("../schema-core/FieldBundle");
const FieldBundleType_1 = require("../schema-core/fieldtypes/FieldBundleType");
const TextAttributes_1 = require("../schema-core/fieldtypes/TextAttributes");
const DateAttributes_1 = require("../schema-core/fieldtypes/DateAttributes");
class PersonField extends Field_1.default {
}
const firstName = new PersonField('first_name', 'First Name', "The person's first name.", FieldType_1.default.TEXT, (params, value) => {
    params.first_name = value;
    return Promise.resolve(params);
}, (params) => params.first_name, new TextAttributes_1.default(TextAttributes_1.TextType.SHORT));
const lastName = new PersonField('last_name', 'Last Name', "The person's last name.", FieldType_1.default.TEXT, (params, value) => {
    params.last_name = value;
    return Promise.resolve(params);
}, (params) => params.last_name, new TextAttributes_1.default(TextAttributes_1.TextType.SHORT));
const PersonSchema = new Entity_1.default('person', 'Person', 'A stripe person corresponding to /v1/persons', 'person', [
    firstName,
    lastName,
    new PersonField('email', 'Email', "The person's email address.", FieldType_1.default.EMAIL, (params, value) => {
        params.email = value;
        return Promise.resolve(params);
    }, (params) => params.email),
    new PersonField('phone', 'Phone Number', "The person's phone number.", FieldType_1.default.PHONE, (params, value) => {
        params.phone = value;
        return Promise.resolve(params);
    }, (params) => params.phone),
    new PersonField('dob', 'Date of Birth', "The person's date of birth.", FieldType_1.default.DATE, (params, value) => {
        params.dob = value;
        return Promise.resolve(params);
    }, (params) => params.dob, new DateAttributes_1.default(DateAttributes_1.DateType.DATE_OF_BIRTH)),
    new PersonField('address', 'Address', "The person's address.", FieldType_1.default.ADDRESS, (params, value) => {
        params.address = value;
        return Promise.resolve(params);
    }, (params) => params.address),
    new FieldBundle_1.default('representative', FieldBundleType_1.default.PLACEHOKDER, [firstName, lastName]),
], 'relationship');
exports.default = PersonSchema;
