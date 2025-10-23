import {AggregateRoot} from "@/context/shared/domain/aggregate-root";

export interface Repository<T extends AggregateRoot> {
    save(aggregate: T): Promise<void>;

    findById?(id: string): Promise<T | null>;

    findAll?(): Promise<T[]>;

    delete?(id: string): Promise<void>;
}
