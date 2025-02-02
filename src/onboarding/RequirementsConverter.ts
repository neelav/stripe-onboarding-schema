/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import type Stripe from 'stripe';
import DefaultEntityRegistry from '../schemas/DefaultEntityRegistry';
import Field, { Params } from '../schema-core/Field';
import OnboardingSchema from './OnboardingSchema';
import { RequirementsType, EntityType, Requirement } from '../types/types';

/**
 * Given a Stripe Account api response, return a well formed ui schema to be
 * consumed by a rendering layer to render a form.
 */
class RequirementsConverter {
  private static DEFAULT_ENTITY = EntityType.ACCOUNT;

  readonly #entityRegistry: DefaultEntityRegistry;

  constructor(entityRegistry: DefaultEntityRegistry) {
    this.#entityRegistry = entityRegistry;
  }

  convertRequirements(
    accountToken: string,
    requirements: Stripe.Account.Requirements,
    include: RequirementsType,
  ): OnboardingSchema {
    const desiredRequirements = requirements[include];

    const requiredFields = (desiredRequirements || []).map((r) => this.convertRequirement(accountToken, r));
    const fieldMap = requiredFields.reduce((map: Map<EntityType, Requirement[]>, requirement: Requirement) => {
      const list = map.get(requirement.entityType) || [];
      map.set(requirement.entityType, list);
      if (!list.find((newRequirement) => newRequirement.field === requirement.field)) {
        list.push(requirement);
      }
      return map;
    }, new Map<EntityType, Requirement[]>());
    return new OnboardingSchema(fieldMap);
  }

  static async setValue<P extends Params, V>(field: Field<P, V>, params: P, value: V): Promise<P> {
    return field.setValue(params, value);
  }

  static getValue<P extends Params, V>(field: Field<P, V>, params: P): V | null | undefined {
    return field.getValue(params);
  }

  private convertRequirement(accountToken: string, requirementId: string): Requirement {
    const entityToken: string | undefined = requirementId.includes('.') ? requirementId.split('.')[0] : undefined;
    let entityName: EntityType | undefined;
    let alternatePrefixEntityName: EntityType | undefined;
    if (entityToken) {
      entityName = this.#entityRegistry.lookupEntityByToken(entityToken);
      alternatePrefixEntityName = this.#entityRegistry.lookupEntityByAlternatePrefix(entityToken);
    }

    const finalEntityName = entityName || alternatePrefixEntityName;
    const fieldId = finalEntityName ? requirementId.substr(requirementId.indexOf('.') + 1) : requirementId;
    const defaultedEntityName = finalEntityName || RequirementsConverter.DEFAULT_ENTITY;
    const fieldIdParts = fieldId.split('.');
    const potentialFieldIds: string[] = [];
    fieldIdParts.forEach((part) => {
      const newIdParts = [potentialFieldIds[potentialFieldIds.length - 1], part];
      const newId = newIdParts.filter((p) => p).join('.');
      potentialFieldIds.push(newId);
    });

    const potentialFields = potentialFieldIds.map((id) =>
      this.#entityRegistry.lookupFieldOrBundle(defaultedEntityName, id),
    );

    const field = potentialFields.find((f) => f);

    let validEntityToken;
    if (entityName) {
      validEntityToken = entityToken;
    } else if (!finalEntityName) {
      validEntityToken = accountToken;
    }
    return field
      ? new Requirement(requirementId, defaultedEntityName, field, validEntityToken)
      : new Requirement(requirementId, EntityType.UNKNOWN, Field.unknown(requirementId), validEntityToken);
  }
}

export default RequirementsConverter;
