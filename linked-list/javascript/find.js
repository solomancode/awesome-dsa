export const find = (value, list) => {
  let current = list.head;
  while (current !== null) {
    if (current.value === value) return current;
    current = current.next;
  }
  return null;
};
