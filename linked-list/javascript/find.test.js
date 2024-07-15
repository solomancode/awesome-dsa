import { expect, test } from "vitest";
import { createLinkedList } from "./create";
import { createNode } from "./node";
import { append } from "./append";
import { find } from "./find";

test("find non-existing", () => {
  const list = createLinkedList();
  let found = find(5, list);
  expect(found).toBe(null);
});

test("find existing value", () => {
  const list = createLinkedList();
  for (const value of [1, 2, 3, 4, 5]) {
    append(createNode(value), list);
  }
  let found = find(5, list);
  expect(found.value).toBe(5);
});
