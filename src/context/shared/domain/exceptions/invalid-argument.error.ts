import {DomainException} from "@/context/shared/domain/exceptions/domain.exception";

export class InvalidArgumentError extends DomainException {

    constructor(message: string) {
        super(message);
    }
}
