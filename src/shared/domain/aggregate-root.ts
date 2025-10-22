import {DomainEvent} from "@/shared/domain/domain-event";

export abstract class AggregateRoot {
    private domainEvents: Array<DomainEvent>;

    constructor() {
        this.domainEvents = [];
    }

    pullDomainEvents(): Array<DomainEvent> {
        // 이벤트 객체까지 완전히 복제하려면 각 이벤트를 개별적으로 복제하는 로직
        const domainEvents: DomainEvent[] = this.domainEvents.slice();

        this.domainEvents = [];

        return domainEvents;
    }

    record(event: DomainEvent): void {
        this.domainEvents.push(event);
    }

    abstract toPrimitives(): any;
}
