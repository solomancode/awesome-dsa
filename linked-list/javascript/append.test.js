import { expect, test } from "vitest";
import { createLinkedList } from "./create";
import { createNode } from "./node";
import { append } from "./append";

test("appends a node to a list", () => {
  const list = createLinkedList();
  const node = createNode("A");
  append(node, list);
  expect(list.head).toBe(node);
  expect(list.tail).toBe(node);
});
