import {ValueObject} from "@/context/shared/domain/value-object/value-object.base";

export abstract class NumberValueObject extends ValueObject<number> {
    constructor(value) {
        super(value);
    }

    protected validate(value: number): void {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error(`<${this.constructor.name}> must be a valid number`);
        }
    }

    public isGreaterThan(other: NumberValueObject): boolean {
        return this.value > other.getValue();
    }

    public isLessThan(other: NumberValueObject): boolean {
        return this.value < other.getValue();
    }
}
