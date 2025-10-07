import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import '@testing-library/jest-dom';
import Song from "../Song";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

test("Mas Informacion button calls navigate with correct params", () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(<Song song={{ idAlbum: "123" }} />);
  fireEvent.click(screen.getByText("Mas Informacion"));
  expect(mockNavigate).toHaveBeenCalledWith("/song/123", { state: { showDetail: false } });
});

test("Agregar a la biblioteca button dispatches addSongs", () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  const songData = { idAlbum: "123", strArtist: "Coldplay", strAlbum: "A Rush of Blood" };
  render(<Song song={songData} />);
  fireEvent.click(screen.getByText("Agregar a la biblioteca"));

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "songs/addSongs",
    payload: {
      id: "123",
      artist: "Coldplay",
      album: "A Rush of Blood",
    },
  });
});
