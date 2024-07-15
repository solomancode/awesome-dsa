import { expect, test } from "vitest";
import { createNode } from "./node";

test("create node", () => {
  const node = createNode("A");
  expect(node.value).toBe("A");
});
