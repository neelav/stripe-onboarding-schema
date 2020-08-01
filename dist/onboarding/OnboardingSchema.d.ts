import Field from '../schema-core/Field';
import { EntityType } from '../schemas/DefaultEntityRegistry';
/**
 * Used inconjunction with RequirementsConverter to give richer metadata about the outstanding
 * requirements for a Stripe account.  This can also be used as a standalone struct to power
 * a UI form.
 */
declare class OnboardingSchema {
    readonly fieldMap: Map<EntityType, Field[]>;
    constructor(fieldMap: Map<EntityType, Field[]>);
}
export default OnboardingSchema;
