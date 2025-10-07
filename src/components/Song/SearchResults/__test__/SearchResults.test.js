import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import '@testing-library/jest-dom';
import SearchResults from "../index";
import { addSongs } from "../../../../redux/slices/librarySlice";


jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../../../../redux/slices/librarySlice", () => ({
  addSongs: jest.fn((song) => ({ type: "ADD_SONG", payload: song })),
}));

describe("SearchResults Component", () => {
  const mockDispatch = jest.fn();
  const mockResults = [
    { idAlbum: "2109614", strAlbum: "A Rush of Blood to the Head", strArtist: "Coldplay" },
    { idAlbum: "1234567", strAlbum: "Hybrid Theory", strArtist: "Linkin Park" },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the list of songs correctly", () => {
    useSelector.mockImplementation(() => ({
      results: mockResults,
      loading: false,
      error: null,
    }));

    render(<SearchResults />);

    mockResults.forEach((song) => {
      const albumHeadings = screen.getAllByRole("heading", { level: 3 });
      expect(albumHeadings.some(h => h.textContent === song.strAlbum)).toBe(true);
      expect(screen.getByText(song.strArtist)).toBeInTheDocument();
    });
  });

  test("calls addSongs action when clicking 'Agregar a mi biblioteca' button", () => {
    useSelector.mockImplementation(() => ({
      results: mockResults,
      loading: false,
      error: null,
    }));

    render(<SearchResults />);

    const buttons = screen.getAllByText("Agregar a mi biblioteca");
    fireEvent.click(buttons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(
      addSongs({
        name: { id: "2109614", artist: "Coldplay", album: "A Rush of Blood to the Head" },
      })
    );
  });

  test("displays a message when there are no results", () => {
    useSelector.mockImplementation(() => ({
      results: [],
      loading: false,
      error: null,
    }));

    render(<SearchResults />);

    expect(screen.getByText("No se encontraron resultados")).toBeInTheDocument();
  });

  test("renders loading spinner when loading is true", () => {
    useSelector.mockImplementation(() => ({
      results: [],
      loading: true,
      error: null,
    }));

    render(<SearchResults />);

    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });

  test("renders error message when error is present", () => {
    const errorMessage = "Ocurrió un error";
    useSelector.mockImplementation(() => ({
      results: [],
      loading: false,
      error: errorMessage,
    }));

    render(<SearchResults />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});