import { expect, test } from "vitest";
import { getProjectLink } from "./project-links";

test("github type selects github link", () => {
  expect(getProjectLink("source")).toHaveProperty("name", "Github");
});
