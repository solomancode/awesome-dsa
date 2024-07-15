import { expect, test } from "vitest";
import { createLinkedList } from "./create";
import { createNode } from "./node";
import { append } from "./append";
import { remove } from "./remove";
import { find } from "./find";

test("remove non-existing node", () => {
  const list = createLinkedList();
  let removed = remove(2, list);
  expect(removed).toBe(null);
});

test("remove fist node", () => {
  const list = createLinkedList();
  [1, 2, 3].map(createNode).forEach((node) => {
    append(node, list);
  });
  let removed = remove(1, list);
  expect(removed.value).toBe(1);
  expect(list.head.value).toBe(2);
});

test("remove last node", () => {
  const list = createLinkedList();
  [1, 2, 3].map(createNode).forEach((node) => {
    append(node, list);
  });
  let removed = remove(3, list);
  expect(removed.value).toBe(3);
  const last = find(2, list);
  expect(last.next).toBe(null);
});

test("remove middle node", () => {
  const list = createLinkedList();
  [1, 2, 3].map(createNode).forEach((node) => {
    append(node, list);
  });
  let removed = remove(2, list);
  expect(removed.value).toBe(2);
  const first = list.head;
  const last = find(3, list);
  expect(first.next).toBe(last);
});
