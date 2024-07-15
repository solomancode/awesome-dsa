import { expect, test } from "vitest";
import { isEmptyList, isFirstNode, isLastNode } from "./assert";
import { createLinkedList } from "./create";
import { append } from "./append";
import { createNode } from "./node";

test("is first node", () => {
  const list = createLinkedList();
  const node = createNode("A");
  append(node, list);
  expect(isFirstNode(node, list)).toBe(true);
});

test("is last node", () => {
  const list = createLinkedList();
  const node = createNode("A");
  append(node, list);
  expect(isLastNode(node, list)).toBe(true);
});

test("is empty list", () => {
  const list = createLinkedList();
  expect(isEmptyList(list)).toBe(true);
});
