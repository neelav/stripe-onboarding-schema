interface Value {
    readonly value: string;
    readonly label: string;
}
declare class EnumAttributes {
    readonly values: Value[];
    constructor(values: Value[]);
}
export default EnumAttributes;
