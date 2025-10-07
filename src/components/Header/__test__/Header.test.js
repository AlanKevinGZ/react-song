import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import Header from "../Header";

describe("Header component", () => {
  test("show title", () => {
    const title = "Biblioteca Musical";
    render(<Header title={title} />);
    const headerText = screen.getByText(title);
    expect(headerText).toBeInTheDocument();
  });

  test("not render additional", () => {
    const title = "Biblioteca Musical";
    render(<Header title={title} />);
    expect(screen.queryByText("Search Music")).toBeNull();
  });
});
