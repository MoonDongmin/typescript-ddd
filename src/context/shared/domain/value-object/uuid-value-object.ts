import {ValueObject}          from "@/context/shared/domain/value-object/value-object.base";
import {
    v4 as uuid,
    validate as uuidValidate,
}                             from "uuid";
import {InvalidArgumentError} from "@/context/shared/domain/exceptions/invalid-argument.error";

export class Uuid extends ValueObject<string> {
    constructor(value: string) {
        super(value);
    }

    static random(): Uuid {
        return new Uuid(uuid());
    }

    protected validate(value: string): void {
        if (!uuidValidate(value)) {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`);
        }
    }

}
