import { Uuid } from "@/shared/domain/value-object/uuid";
import { InvalidArgumentError } from "@/shared/domain/value-object/invalid-argument-error";

describe("Uuid Test", () => {
  it("should create valid UUID", () => {
    const id = Uuid.random();

    expect(id.value).toBeDefined();
  });

  it("should accept valid UUID string", () => {
    const validUuid = "123e4567-e89b-12d3-a456-426614174000";
    const id = new Uuid(validUuid);

    expect(id.value).toEqual(validUuid);
  });

  it("should throw error for invalid UUID", () => {
    expect(() => new Uuid("invalid-uuid")).toThrow(InvalidArgumentError);
  });

  it("should compare UUIDs correctly", () => {
    const id1 = new Uuid("123e4567-e89b-12d3-a456-426614174000");
    const id2 = new Uuid("123e4567-e89b-12d3-a456-426614174000");
    const id3 = new Uuid("223e4567-e89b-12d3-a456-426614174000");

    expect(id1.equals(id2)).toBe(true);
    expect(id1.equals(id3)).toBe(false);
  });
});
