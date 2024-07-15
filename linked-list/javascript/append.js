import { connectNodes } from "./node";
import { isEmptyList } from "./assert";

export const append = (node, list) => {
  if (isEmptyList(list)) {
    list.head = node;
    list.tail = node;
  } else {
    connectNodes(list.tail, node);
    list.tail = node;
  }
};
