import { expect, test } from "vitest";
import { createLinkedList } from "./create";

test("create an empty list", () => {
  const list = createLinkedList();
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
});
