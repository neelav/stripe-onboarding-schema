import Stripe from 'stripe';
import FieldType from './fieldtypes/FieldType';
import EnumAttributes from './fieldtypes/EnumAttributes';
import TextAttributes from './fieldtypes/TextAttributes';

type Container = Stripe.Account | Stripe.Person | unknown;
type Attributes = EnumAttributes | TextAttributes;

class Field<C extends Container, V> {
  readonly id: string;

  readonly name: string;

  readonly description: string;

  readonly fieldType: FieldType;

  readonly setValue: (container: C, value: V) => void;

  readonly getValue: (container: C) => V | null | undefined;

  // Attributes specific to this field's type
  readonly attributes?: Attributes;

  constructor(
    id: string,
    name: string,
    description: string,
    fieldType: FieldType,
    setValue: (container: C, value: V) => void,
    getValue: (container: C) => V | null | undefined,
    attributes?: Attributes,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.fieldType = fieldType;
    this.setValue = setValue;
    this.getValue = getValue;
    this.attributes = attributes;
  }

  private static EMPTY_SETTER = () => {
    // do nothing
  };

  private static EMPTY_GETTER = () => {
    // do nothing
  };

  /**
   * Use this method when you want to advertise to the UI that the particular id could not be
   * resolved to a "real" field.
   */
  static unknown(id: string): Field<unknown, unknown> {
    return new Field<unknown, unknown>(
      id,
      'Unknown',
      'field id is not in the schema',
      FieldType.UNKNOWN,
      this.EMPTY_SETTER,
      this.EMPTY_GETTER,
    );
  }
}

export default Field;
