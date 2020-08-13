import Stripe from 'stripe';
import FieldType from './fieldtypes/FieldType';
import EnumAttributes from './fieldtypes/EnumAttributes';
import TextAttributes from './fieldtypes/TextAttributes';
import DateAttributes from './fieldtypes/DateAttributes';
export declare type Params = Stripe.AccountUpdateParams | Stripe.PersonUpdateParams;
export declare type Container = Stripe.Account | Stripe.Person;
declare type Attributes = EnumAttributes | TextAttributes | DateAttributes;
declare class Field<P extends Params, V> {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly fieldType: FieldType;
    readonly setValue: (params: P, value: V) => Promise<P>;
    readonly getValue: (params: P) => V | null | undefined;
    readonly attributes?: Attributes;
    constructor(id: string, name: string, description: string, fieldType: FieldType, setValue: (params: P, value: V) => Promise<P>, getValue: (params: P) => V | null | undefined, attributes?: Attributes);
    private static EMPTY_SETTER;
    private static EMPTY_GETTER;
    /**
     * Use this method when you want to advertise to the UI that the particular id could not be
     * resolved to a "real" field.
     */
    static unknown(id: string): Field<any, undefined>;
}
export default Field;
