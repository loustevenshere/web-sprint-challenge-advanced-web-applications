import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

const fakeColors = [
  {
    color: "red",
    code: {
      hex: "#FF0000"
    },
    id: 1
  },
  {
    color: "black",
    code: {
      hex: "#000000"
    },
    id: 2
  },
  {
    color: "white",
    code: {
      hex: "#255255255"
    },
    id: 3
  },
]

test("Renders BubblePage without errors", () => {
  // Finish this test
 render(<BubblePage />)

});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  jest.mock("./bubblepage")
  render(<BubblePage />);

  let colors = screen.queryAllByTestId("colorList");

  expect(colors).toHaveLength(3);
  expect(colors[1].color).toHaveTextContent('black')


});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading