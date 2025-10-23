import { DomainEventPrimitives } from "@/context/shared/domain/interface/domain-event-primitives";

export abstract class DomainEvent implements DomainEventPrimitives {
  static EVENT_NAME: string;

  readonly eventId: string;
  readonly occurredOn: Date;
  readonly aggregateId: string;

  constructor(params: {
    eventId: string;
    occurredOn: Date;
    aggregateId: string;
  }) {
    this.eventId = params.eventId;
    this.occurredOn = params.occurredOn;
    this.aggregateId = params.aggregateId;
  }

  // 이벤트 이름 반환
  abstract eventName(): string;

  // 원시 타입으로 변환
  abstract toPrimitives(): DomainEventPrimitives;

  // 원시 타입으로부터 이벤트 생성
  static fromPrimitives?(primitives: DomainEventPrimitives): DomainEvent;
}
