interface Value {
    readonly value: string,
    readonly label: string
}

class EnumAttributes {
    readonly values: Value[]

    constructor(values: Value[]) {
      this.values = values;
    }
}

export default EnumAttributes;
