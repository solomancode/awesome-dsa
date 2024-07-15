import { isEmptyList, isFirstNode, isLastNode } from "./assert";

const removeFirstNode = (list) => {
  const node = list.head;
  const next = list.head.next;
  list.head = next;
  return node;
};

const removeLastNode = (previous, node) => {
  previous.next = null;
  return node;
};

const removeMiddleNode = (previous, node) => {
  const next = node.next;
  previous.next = next;
  node.next = null;
  return node;
};

export const remove = (value, list) => {
  if (isEmptyList(list)) {
    return null;
  }

  let current = list.head;
  let previous = null;
  while (current !== null) {
    if (current.value === value) {
      if (isFirstNode(current, list)) {
        const removed = removeFirstNode(list, current);
        return removed;
      } else if (isLastNode(current)) {
        const removed = removeLastNode(previous, current);
        return removed;
      } /** middle **/ else {
        const removed = removeMiddleNode(previous, current);
        return removed;
      }
    }
    previous = current;
    current = current.next;
  }

  return null /** Not Found */;
};
