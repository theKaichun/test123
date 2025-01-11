import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import data from "./data.json";

describe("可以自行新增測試", () => {
  test("(請讓這個測試維持通過) renders the Canvas component", () => {
    render(<App />);
    const canvas = screen.getByTestId("canvas");
    expect(canvas).toBeInTheDocument();
  });

  test("(請讓這個測試通過) displays title from JSON file", () => {
    render(<App />);
    const itemTitles = data.items.map((item) => item.title).filter((e) => e);
    itemTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("(請讓這個測試通過) handles image load failures with a placeholder", () => {
    render(<App />);
    screen.getAllByRole("img").forEach((img) => {
      fireEvent.error(img);
    });

    screen.getAllByRole("img").forEach((img) => {
      expect(img.src).toContain("pic-fault.svg");
    });
  });
});
