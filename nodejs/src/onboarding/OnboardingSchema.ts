import Field from 'schema-core/Field';

/**
 * Used inconjunction with RequirementsConverter to give richer metadata about the outstanding
 * requirements for a Stripe account.  This can also be used as a standalone struct to power
 * a UI form.
 */
class OnboardingSchema {
    readonly fieldMap: Map<string, Field[]>

    constructor(fieldMap: Map<string, Field[]>) {
      this.fieldMap = fieldMap;
    }
}

export default OnboardingSchema;
