type Value = {
    value: string,
    label: string
}

class EnumAttributes {
    values: Value[]

    constructor(values: Value[]) {
      this.values = values;
    }
}

export default EnumAttributes;
