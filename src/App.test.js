import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Select element to test", () => {
  render(<App />);
  const linkElement = screen.getByText(/Select element to test./);
  expect(linkElement).toBeInTheDocument();
});

describe("Keys in list", () => {
  test("renders Index as a key", () => {
    render(<App />);
    const linkElement = screen.getByText("Index as Key in lists");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Id as a key", () => {
    render(<App />);
    const linkElement = screen.getByText("Unique Id as Key in lists");
    expect(linkElement).toBeInTheDocument();
  });
});
