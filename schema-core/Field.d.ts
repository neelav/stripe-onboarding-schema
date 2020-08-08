import Stripe from 'stripe';
import FieldType from './fieldtypes/FieldType';
import EnumAttributes from './fieldtypes/EnumAttributes';
import TextAttributes from './fieldtypes/TextAttributes';
export declare type Container = Stripe.Account | Stripe.Person;
declare type Attributes = EnumAttributes | TextAttributes;
declare class Field<C extends Container, V> {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly fieldType: FieldType;
    readonly setValue: (container: C, value: V) => Promise<C>;
    readonly getValue: (container: C) => Promise<V | null | undefined>;
    readonly attributes?: Attributes;
    constructor(id: string, name: string, description: string, fieldType: FieldType, setValue: (container: C, value: V) => Promise<C>, getValue: (container: C) => Promise<V | null | undefined>, attributes?: Attributes);
    private static EMPTY_SETTER;
    private static EMPTY_GETTER;
    /**
     * Use this method when you want to advertise to the UI that the particular id could not be
     * resolved to a "real" field.
     */
    static unknown(id: string): Field<any, any>;
}
export default Field;
