import EntityRegistry from 'schemas/EntityRegistry';
import Stripe from 'stripe';
import { assertNever } from 'util/util';
import Field from 'schema-core/Field';
import OnboardingSchema from './OnboardingSchema';

/**
 * Given a Stripe Account api response, return a well formed ui schema to be
 * consumed by a rendering layer to render a form.
 */
class RequirementsConverter {
    private static DEFAULT_ENTITY = 'account';

    readonly #entityRegistry: EntityRegistry

    constructor(entityRegistry: EntityRegistry) {
      this.#entityRegistry = entityRegistry;
    }

    convertRequirements(
      requirements: Stripe.Account.Requirements,
      include: 'past_due' | 'currently_due' | 'eventually_due',
    ): OnboardingSchema {
      let desiredRequirements: string[] | null;
      switch (include) {
        case 'past_due': {
          desiredRequirements = requirements.past_due;
          break;
        }
        case 'currently_due': {
          desiredRequirements = requirements.currently_due;
          break;
        }
        case 'eventually_due': {
          desiredRequirements = requirements.eventually_due;
          break;
        }
        default: {
          assertNever(include);
        }
      }

      const requiredFields = (desiredRequirements || []).map((r) => this.convertRequirement(r));
      return new OnboardingSchema();
    }

    private convertRequirement(requirementId: string): [string, Field] {
      const entityToken = requirementId.includes('.') && requirementId.split('.')[0];
      let entityName: string | undefined;
      if (entityToken) {
        entityName = this.#entityRegistry.lookupEntityByToken(entityToken);
      }

      const fieldId = entityName ? requirementId.substr(requirementId.indexOf('.')) : requirementId;
      const defaultedEntityName = entityName || RequirementsConverter.DEFAULT_ENTITY;
      const field = this.#entityRegistry.lookupField(defaultedEntityName, fieldId);

      return field ? [defaultedEntityName, field] : [entityName || '__UNKNOWN__', Field.unknown(requirementId)];
    }
}

export default RequirementsConverter;
