enum DateType {
    DATE_OF_BIRTH = 'DATE_OF_BIRTH',
}

class DateAttributes {
    readonly type: DateType

    constructor(type: DateType) {
      this.type = type;
    }
}

export default DateAttributes;
export { DateType };
