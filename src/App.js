import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Library from "./components/Song/Library";
import SearchResults from "./components/Song/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, titleSong: "oh lord", artist: "foxy shazam", duration: "4:00" },
    { id: 2, titleSong: "Sonne", artist: "Rammstein", duration: "3:30" },
    { id: 3, titleSong: "INVISIBLE", artist: "Duran Duran", duration: "5:15" },
  ]);

  const [library, setLibrary] = useState([]);

  useEffect(() => {
    console.log( "La biblioteca actualizada");
  }, [library]);

  const addToLibrary = (song) => {
    setLibrary((prevLibrary) => [...prevLibrary, song]);
  };

  return (
    <div className="App">
      <Header title="Music App"></Header>

      <SearchResults songs={searchResults} onAddToLibrary={addToLibrary} />

      <Library songs={library} />
    </div>
  );
}

export default App;
