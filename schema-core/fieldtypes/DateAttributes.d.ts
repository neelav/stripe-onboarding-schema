declare enum DateType {
    DATE_OF_BIRTH = "DATE_OF_BIRTH"
}
declare class DateAttributes {
    readonly type: DateType;
    constructor(type: DateType);
}
export default DateAttributes;
export { DateType };
