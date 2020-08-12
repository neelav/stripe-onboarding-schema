import Field from '../schema-core/Field';
export declare enum EntityType {
    ACCOUNT = "ACCOUNT",
    UNKNOWN = "UNKNOWN"
}
export declare enum RequirementsType {
    PAST_DUE = "past_due",
    CURRENTLY_DUE = "currently_due",
    EVENTUALLY_DUE = "eventually_due"
}
export declare enum Country {
    US = "US",
    CA = "CA",
    GB = "GB",
    FR = "FR"
}
export declare class Requirement {
    readonly requirementId: string;
    readonly entityType: EntityType;
    readonly entityToken: string;
    readonly field: Field<any, any>;
    constructor(requirementId: string, entityType: EntityType, field: Field<any, any>, entityToken: string);
}
