enum TextType {
    SHORT = 'SHORT',
    LONG = 'LONG'
}

class TextAttributes {
    readonly type: TextType

    constructor(type: TextType) {
      this.type = type;
    }
}

export default TextAttributes;
export { TextType };
