import React, { useState } from "react";
import Header from "./components/Header/Header";
import SearchResults from "./components/Song/SearchResults";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SongDetail from "./components/SongDetail/SongDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./themes";
import GlobalStyle from "./themes/GlobalStyle";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Header title="Music App"></Header>
        <SearchBar onSearch={handleSearch} />

        <Routes>
          <Route
            path="/"
            element={<SearchResults key={query} query={query} />}
          />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
