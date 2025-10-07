import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import "@testing-library/jest-dom";
import Library from "../index";
import { removeSong } from "../../../../redux/slices/librarySlice";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Library Component", () => {
  const mockDispatch = jest.fn();

  const mockSongs = [
    { name: { id: "1", artist: "Coldplay", album: "A Rush of Blood to the Head" } },
    { name: { id: "2", artist: "Linkin Park", album: "Hybrid Theory" } },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the list of songs correctly", () => {
    useSelector.mockImplementation((selector) =>
      selector({ library: { songs: mockSongs } })
    );

    render(<Library />);

    mockSongs.forEach((song) => {
      expect(
        screen.getByText(
          `Artista: ${song.name.artist} - Álbum: ${song.name.album}`
        )
      ).toBeInTheDocument();

      expect(screen.getAllByText("Eliminar").length).toBeGreaterThan(0);
    });
  });

  test("calls removeSong when clicking 'Eliminar' button", () => {
    useSelector.mockImplementation((selector) =>
      selector({ library: { songs: mockSongs } })
    );

    render(<Library />);

    const deleteButtons = screen.getAllByText("Eliminar");
    fireEvent.click(deleteButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(removeSong("1"));
  });

  test("displays message when the library is empty", () => {
    useSelector.mockImplementation((selector) =>
      selector({ library: { songs: [] } })
    );

    render(<Library />);

    expect(screen.getByText("No hay canciones en la biblioteca")).toBeInTheDocument();
  });
});