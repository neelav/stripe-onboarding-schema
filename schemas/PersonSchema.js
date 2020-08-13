"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../schema-core/Entity");
const Field_1 = require("../schema-core/Field");
const FieldType_1 = require("../schema-core/fieldtypes/FieldType");
const FieldBundle_1 = require("../schema-core/FieldBundle");
const FieldBundleType_1 = require("../schema-core/fieldtypes/FieldBundleType");
const TextAttributes_1 = require("../schema-core/fieldtypes/TextAttributes");
const DateAttributes_1 = require("../schema-core/fieldtypes/DateAttributes");
const firstName = new Field_1.default('first_name', 'First Name', "The person's first name.", FieldType_1.default.TEXT, (container, value) => {
    container.first_name = value;
    return Promise.resolve(container);
}, (container) => container.first_name, new TextAttributes_1.default(TextAttributes_1.TextType.SHORT));
const lastName = new Field_1.default('last_name', 'Last Name', "The person's last name.", FieldType_1.default.TEXT, (container, value) => {
    container.last_name = value;
    return Promise.resolve(container);
}, (container) => container.last_name, new TextAttributes_1.default(TextAttributes_1.TextType.SHORT));
const PersonSchema = new Entity_1.default('person', 'Person', 'A stripe person corresponding to /v1/persons', 'person', [
    firstName,
    lastName,
    new Field_1.default('email', 'Email', "The person's email address.", FieldType_1.default.EMAIL, (container, value) => {
        container.email = value;
        return Promise.resolve(container);
    }, (container) => container.email),
    new Field_1.default('phone', 'Phone Number', "The person's phone number.", FieldType_1.default.PHONE, (container, value) => {
        container.phone = value;
        return Promise.resolve(container);
    }, (container) => container.phone),
    new Field_1.default('dob', 'Date of Birth', "The person's date of birth.", FieldType_1.default.DATE, (container, value) => {
        container.dob = value;
        return Promise.resolve(container);
    }, (container) => container.dob, new DateAttributes_1.default(DateAttributes_1.DateType.DATE_OF_BIRTH)),
    new Field_1.default('address', 'Address', "The person's address.", FieldType_1.default.ADDRESS, (container, value) => {
        container.address = value;
        return Promise.resolve(container);
    }, (container) => container.address),
    new FieldBundle_1.default('representative', FieldBundleType_1.default.PLACEHOKDER, [firstName, lastName]),
], 'relationship');
exports.default = PersonSchema;
