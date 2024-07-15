import { expect, test } from "vitest";
import { createLinkedList } from "./create";
import { createNode } from "./node";
import { append } from "./append";
import { count } from "./count";

test("count nodes", () => {
  const list = createLinkedList();
  for (const value of [1, 2, 3]) {
    append(createNode(value), list);
  }
  expect(count(list)).toBe(3);
});
