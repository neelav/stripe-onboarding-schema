"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../schema-core/Entity");
const Field_1 = require("../schema-core/Field");
const FieldType_1 = require("../schema-core/fieldtypes/FieldType");
const FieldBundle_1 = require("../schema-core/FieldBundle");
const FieldBundleType_1 = require("../schema-core/fieldtypes/FieldBundleType");
const firstName = new Field_1.default('first_name', 'First Name', "The person's first name.", FieldType_1.default.TEXT, (container, value) => {
    container.first_name = value;
    return Promise.resolve(container);
}, (container) => container.first_name);
const lastName = new Field_1.default('last_name', 'Last Name', "The person's last name.", FieldType_1.default.TEXT, (container, value) => {
    container.last_name = value;
    return Promise.resolve(container);
}, (container) => container.last_name);
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
    new FieldBundle_1.default('representative', FieldBundleType_1.default.CONTAINER, [firstName, lastName]),
], 'relationship');
exports.default = PersonSchema;
