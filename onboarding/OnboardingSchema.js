"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used inconjunction with RequirementsConverter to give richer metadata about the outstanding
 * requirements for a Stripe account.  This can also be used as a standalone struct to power
 * a UI form.
 */
class OnboardingSchema {
    constructor(fieldMap) {
        this.fieldMap = fieldMap;
    }
}
exports.default = OnboardingSchema;
