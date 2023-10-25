import { render, screen } from "@testing-library/react";
import { describe, it } from "jest-circus";
import App from "../src/components/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
