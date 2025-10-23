export abstract class ValueObject<T> {
    protected readonly value: T;


    constructor(value: T) {
        this.value = value;
        this.validate(value);
    }

    // 값 유효성 검증(하위 클래스에서 구현)
    protected abstract validate(value: T): void;

    // 값 반환
    public getValue(): T {
        return this.value;
    }

    // 동등성 비교
    public equals(other: ValueObject<T>): boolean {
        if (other === null || other === undefined) {
            return false;
        }

        return JSON.stringify(this.value) === JSON.stringify(other.value);
    }

    // 문자열 표현
    public toString(): string {
        return String(this.value);
    }

    // 원시 타입으로 변환
    public toPrimitives(): T {
        return this.value;
    }
}
