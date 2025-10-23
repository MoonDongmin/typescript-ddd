import {ValueObject} from "@/context/shared/domain/value-object/value-object.base";
import {InvalidArgumentError} from "@/context/shared/domain/exceptions/invalid-argument.error";

export abstract class EnumValueObject<T> extends ValueObject<T> {
    constructor(value: T, public readonly validValues: T[]) {
        super(value);
    }

    protected validate(value: T): void {
        if (!this.validValues.includes(value)) {
            throw new InvalidArgumentError(
                `<${this.constructor.name}> does not allow the value <${value}>. Valid values: ${this.validValues.join(", ")}`,
            );
        }
    }
}
