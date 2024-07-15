export const createNode = (value) => ({
  value,
  next: null,
});

export const connectNodes = (node1, node2) => {
  node1.next = node2;
};
