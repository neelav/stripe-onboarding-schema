import { EntityType, Requirement } from '../types/types';

/**
 * Used inconjunction with RequirementsConverter to give richer metadata about the outstanding
 * requirements for a Stripe account.  This can also be used as a standalone struct to power
 * a UI form.
 */
class OnboardingSchema {
  readonly fieldMap: Map<EntityType, Requirement[]>;

  constructor(fieldMap: Map<EntityType, Requirement[]>) {
    this.fieldMap = fieldMap;
  }
}

export default OnboardingSchema;
