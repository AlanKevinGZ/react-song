import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; 
import SearchBar from "../index";
import { fetchSongs } from "../../../redux/slices/searchSlice";

jest.mock("../../../redux/slices/searchSlice", () => ({
  fetchSongs: jest.fn(),
}));

const mockStore = configureStore([]); 
describe("SearchBar Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      search: { loading: false, error: null },
    });
    store.dispatch = jest.fn(); 
  });

  test("renders the search input correctly", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByPlaceholderText("ColdPlay")).toBeInTheDocument();
  });

  test("allows the user to type in the input and updates the value", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText("ColdPlay");
    fireEvent.change(input, { target: { value: "Imagine Dragons" } });
    expect(input.value).toBe("Imagine Dragons");
  });

  test("calls the search function when clicking the 'Search' button", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText("ColdPlay");
    const button = screen.getByDisplayValue("Buscar");

    fireEvent.change(input, { target: { value: "Linkin Park" } });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(fetchSongs).toHaveBeenCalled();
  });

  test("calls the search function when pressing 'Enter'", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText("ColdPlay");
    fireEvent.change(input, { target: { value: "Queen" } });
    fireEvent.submit(input.closest("form"));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(fetchSongs).toHaveBeenCalled();
  });
});