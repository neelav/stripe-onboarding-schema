declare enum TextType {
    SHORT = "SHORT",
    LONG = "LONG"
}
declare class TextAttributes {
    readonly type: TextType;
    constructor(type: TextType);
}
export default TextAttributes;
export { TextType };
