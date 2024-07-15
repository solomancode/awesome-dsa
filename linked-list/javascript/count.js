export const count = (list) => {
  let current = list.head;
  let count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};
