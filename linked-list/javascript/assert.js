export const isEmptyList = (list) => {
  return list.head === null;
};

export const isFirstNode = (node, list) => {
  return node === list.head;
};

export const hasSingleNode = (list) => {
  return list.head === list.tail;
};

export const isLastNode = (node) => {
  return node.next === null;
};
