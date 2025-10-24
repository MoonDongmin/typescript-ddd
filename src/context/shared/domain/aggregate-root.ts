export abstract class AggregateRoot {
  private domainEvents: DomainEvent[] = [];

  // 도메인 이벤트 기록
  protected recordEvent(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  // 기록된 모든 도메인 이벤트를 추출하고 초기화
  public pullDomainEvents(): DomainEvent[] {
    const events: DomainEvent[] = [...this.domainEvents];

    this.domainEvents = [];

    return events;
  }

  // 기록된 이벤트 목록 조회(제거하지 않음)
  public getDomainEvent(): DomainEvent[] {
    return [...this.domainEvents];
  }

  // 이벤트 초기화
  public clearEvents(): void {
    this.domainEvents = [];
  }
}
