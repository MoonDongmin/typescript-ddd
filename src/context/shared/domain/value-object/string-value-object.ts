import {ValueObject} from "@/context/shared/domain/value-object/value-object.base";

export abstract class StringValueObject extends ValueObject<string> {
    constructor(value: string) {
        super(value);
    }

    protected validate(value: string) {
        if (typeof value !== "string") {
            throw new Error(`<${this.constructor.name}> must be a string`)  ;
        }
    }
}
