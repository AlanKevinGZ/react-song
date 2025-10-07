import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";
import { MemoryRouter } from "react-router-dom";


jest.mock("../components/Song/SearchResults", () => (props) => (
  <div data-testid="search-results">
    SearchResults Component - query: {props.query}
    <button
      onClick={() =>
        props.addSongs &&
        props.addSongs({
          name: { id: "1", artist: "Coldplay", album: "A Rush of Blood" },
        })
      }
    >
      Agregar a biblioteca
    </button>
  </div>
));


jest.mock("../components/Song/Library", () => (props) => (
  <div data-testid="library">Library Component</div>
));


jest.mock("../components/Header/Header", () => (props) => (
  <h1>{props.title}</h1>
));


jest.mock("../components/SearchBar", () => (props) => (
  <input
    placeholder="Buscar canción"
    onChange={(e) => props.onSearch && props.onSearch(e.target.value)}
  />
));


jest.mock("axios");
jest.mock("../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [
      { idAlbum: "2109614", strAlbum: "A Rush of Blood to the Head", strArtist: "Coldplay" },
    ],
    loading: false,
    error: null,
  })),
}));

describe("App Component", () => {
  test("renders Header, SearchBar, SearchResults, and Library", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Music App")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Buscar canción")).toBeInTheDocument();
    expect(screen.getByTestId("search-results")).toBeInTheDocument();
    expect(screen.getByTestId("library")).toBeInTheDocument();
  });

  test("updates query when typing in SearchBar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Buscar canción");
    fireEvent.change(input, { target: { value: "Coldplay" } });

    expect(screen.getByText(/query: Coldplay/i)).toBeInTheDocument();
  });

  test("simulates adding a song to the library", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const addButton = screen.getByText("Agregar a biblioteca");
    fireEvent.click(addButton);

    expect(addButton).toBeInTheDocument();
  });
});
