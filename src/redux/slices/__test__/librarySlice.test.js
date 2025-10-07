import songReducer, { addSongs, removeSong } from "../librarySlice";

describe("librarySlice", () => {
  const initialState = { songs: [] };

  const sampleSong = {
    name: { id: "1", artist: "Coldplay", album: "A Rush of Blood" },
  };

  test("should return the initial state", () => {
    expect(songReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test("addSongs should add a song to the state", () => {
    const nextState = songReducer(initialState, addSongs(sampleSong));
    expect(nextState.songs).toHaveLength(1);
    expect(nextState.songs[0]).toEqual(sampleSong);
  });

  test("addSongs should not add duplicate songs", () => {
    const stateWithSong = { songs: [sampleSong] };
    const nextState = songReducer(stateWithSong, addSongs(sampleSong));
    expect(nextState.songs).toHaveLength(1);
  });

  test("removeSong should remove a song by id", () => {
    const stateWithSong = { songs: [sampleSong] };
    const nextState = songReducer(stateWithSong, removeSong("1"));
    expect(nextState.songs).toHaveLength(0);
  });

  test("removeSong should do nothing if id not found", () => {
    const stateWithSong = { songs: [sampleSong] };
    const nextState = songReducer(stateWithSong, removeSong("999"));
    expect(nextState.songs).toHaveLength(1);
  });
});
