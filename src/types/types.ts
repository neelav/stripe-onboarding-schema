import Field from '../schema-core/Field';

export enum EntityType {
  ACCOUNT = 'ACCOUNT',
  UNKNOWN = 'UNKNOWN',
}

export enum RequirementsType {
  PAST_DUE = 'past_due',
  CURRENTLY_DUE = 'currently_due',
  EVENTUALLY_DUE = 'eventually_due',
}

export enum Country {
  US = 'US',
  CA = 'CA',
  GB = 'GB',
  FR = 'FR',
}

export class Requirement {
  readonly requirementId: string;

  readonly entityType: EntityType;

  readonly entityToken?: string;

  readonly field: Field<any, any>;

  constructor(requirementId: string, entityType: EntityType, field: Field<any, any>, entityToken?: string) {
    this.requirementId = requirementId;
    this.entityType = entityType;
    this.field = field;
    this.entityToken = entityToken;
  }
}
