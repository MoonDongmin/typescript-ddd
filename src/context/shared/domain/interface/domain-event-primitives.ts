export interface DomainEventPrimitives {
  eventId: string;
  occurredOn: Date;
  aggregateId: string;

  [key: string]: any;
}
