import searchReducer, { resetResults, fetchSongs } from "../searchSlice";

jest.mock("axios");

describe("searchSlice", () => {
  const initialState = { results: [], loading: false, error: null };
  const sampleAlbums = [
    { idAlbum: "1", strAlbum: "Album 1", strArtist: "Artist 1" },
  ];

  test("should return the initial state", () => {
    expect(searchReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test("resetResults should clear the state", () => {
    const prevState = { results: sampleAlbums, loading: true, error: "Error" };
    const nextState = searchReducer(prevState, resetResults());
    expect(nextState).toEqual(initialState);
  });

  test("fetchSongs.pending sets loading true and clears error", () => {
    const action = { type: "search/fetchSongs/pending" };
    const nextState = searchReducer(initialState, action);
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  test("fetchSongs.fulfilled sets results and loading false", () => {
    const action = {
      type: "search/fetchSongs/fulfilled",
      payload: sampleAlbums,
    };
    const nextState = searchReducer(initialState, action);
    expect(nextState.loading).toBe(false);
    expect(nextState.results).toEqual(sampleAlbums);
  });

  test("fetchSongs.rejected sets error and loading false", () => {
    const action = {
      type: "search/fetchSongs/rejected",
      payload: "Network Error",
    };
    const nextState = searchReducer(initialState, action);
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe("Network Error");
  });
});