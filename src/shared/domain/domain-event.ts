export abstract class DomainEvent {
    readonly eventId: string;
    readonly occurredOn: Date;
    readonly eventName: string;

    constructor(eventId: string, occurredOn: Date, eventName: string) {
        this.eventId = eventId;
        this.occurredOn = occurredOn;
        this.eventName = eventName;
    }

    abstract toPrimitives(): any;

}
