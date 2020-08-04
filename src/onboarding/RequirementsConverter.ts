import type Stripe from 'stripe';
import DefaultEntityRegistry from '../schemas/DefaultEntityRegistry';
import Field from '../schema-core/Field';
import OnboardingSchema from './OnboardingSchema';
import { RequirementsType, EntityType } from '../types/types';

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
        (map: Map<EntityType, Field[]>, field: [EntityType, Field]) => {
          const list = map.get(field[0]) || [];
          map.set(field[0], list);
          list.push(field[1]);
          return map;
        },
        new Map<EntityType, Field[]>(),
      );
      return new OnboardingSchema(fieldMap);
    }

    private convertRequirement(requirementId: string): [EntityType, Field] {
      const entityToken = requirementId.includes('.') && requirementId.split('.')[0];
      let entityName: EntityType | undefined;
      if (entityToken) {
        entityName = this.#entityRegistry.lookupEntityByToken(entityToken);
      }

      const fieldId = entityName ? requirementId.substr(requirementId.indexOf('.')) : requirementId;
      const defaultedEntityName = entityName || RequirementsConverter.DEFAULT_ENTITY;
      const field = this.#entityRegistry.lookupField(defaultedEntityName, fieldId);

      return field ? [defaultedEntityName, field]
        : [entityName || EntityType.UNKNOWN, Field.unknown(requirementId)];
    }
}

export default RequirementsConverter;
