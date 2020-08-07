import type Stripe from 'stripe';
import DefaultEntityRegistry from '../schemas/DefaultEntityRegistry';
import Field from '../schema-core/Field';
import OnboardingSchema from './OnboardingSchema';
import { RequirementsType } from '../types/types';
/**
 * Given a Stripe Account api response, return a well formed ui schema to be
 * consumed by a rendering layer to render a form.
 */
declare class RequirementsConverter {
    #private;
    private static DEFAULT_ENTITY;
    constructor(entityRegistry: DefaultEntityRegistry);
    convertRequirements(requirements: Stripe.Account.Requirements, include: RequirementsType): OnboardingSchema;
    static setValue<C, V>(field: Field<C, V>, container: C, value: V): void;
    static getValue<C, V>(field: Field<C, V>, container: C): V | null | undefined;
    private convertRequirement;
}
export default RequirementsConverter;
