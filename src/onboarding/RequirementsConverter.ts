import type Stripe from 'stripe';
import DefaultEntityRegistry from '../schemas/DefaultEntityRegistry';
import Field from '../schema-core/Field';
import OnboardingSchema from './OnboardingSchema';
import { RequirementsType, EntityType, Requirement } from '../types/types';

/**
 * Given a Stripe Account api response, return a well formed ui schema to be
 * consumed by a rendering layer to render a form.
 */
class RequirementsConverter {
    private static DEFAULT_ENTITY = EntityType.ACCOUNT;

    readonly #entityRegistry: DefaultEntityRegistry

    constructor(entityRegistry: DefaultEntityRegistry) {
      this.#entityRegistry = entityRegistry;
    }

    convertRequirements(
      requirements: Stripe.Account.Requirements,
      include: RequirementsType,
    ): OnboardingSchema {
      const desiredRequirements = requirements[include];

      const requiredFields = (desiredRequirements || []).map((r) => this.convertRequirement(r));
      const fieldMap = requiredFields.reduce(
        (map: Map<EntityType, Requirement[]>, requirement: Requirement) => {
          const list = map.get(requirement.entityType) || [];
          map.set(requirement.entityType, list);
          list.push(requirement);
          return map;
        },
        new Map<EntityType, Requirement[]>(),
      );
      return new OnboardingSchema(fieldMap);
    }

    private convertRequirement(requirementId: string): Requirement {
      let entityToken: string | undefined = requirementId.includes('.') ? requirementId.split('.')[0] : undefined;
      let entityName: EntityType | undefined;
      if (entityToken) {
        entityName = this.#entityRegistry.lookupEntityByToken(entityToken);
      }

      const fieldId = entityName ? requirementId.substr(requirementId.indexOf('.')) : requirementId;
      const defaultedEntityName = entityName || RequirementsConverter.DEFAULT_ENTITY;
      const field = this.#entityRegistry.lookupField(defaultedEntityName, fieldId);

      entityToken = entityName ? entityToken : undefined;
      return field ? new Requirement(requirementId, defaultedEntityName, field, entityToken)
        : new Requirement(requirementId, EntityType.UNKNOWN, Field.unknown(requirementId));
    }
}

export default RequirementsConverter;
