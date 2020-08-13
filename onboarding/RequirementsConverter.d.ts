import type Stripe from 'stripe';
import DefaultEntityRegistry from '../schemas/DefaultEntityRegistry';
import Field, { Params } from '../schema-core/Field';
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
    convertRequirements(accountToken: string, requirements: Stripe.Account.Requirements, include: RequirementsType): OnboardingSchema;
    static setValue<P extends Params, V>(field: Field<P, V>, params: P, value: V): Promise<P>;
    static getValue<P extends Params, V>(field: Field<P, V>, params: P): V | null | undefined;
    private convertRequirement;
}
export default RequirementsConverter;
