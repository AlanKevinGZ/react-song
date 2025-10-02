import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ResultStyle } from "./styles";
import Spinner from "../../Spinner";
import { addSongs } from "../../../redux/slices/librarySlice";

const SearchResults = () => {
  const dispatch = useDispatch();

  // Accedemos al estado de búsqueda
  const { results, loading, error } = useSelector((state) => state.search);

  const handleAddSong = (song) => {
    const songObject = {
      name: {
        id: song.idAlbum,
        artist: song.strArtist,
        album: song.strAlbum,
      },
    };

    dispatch(addSongs(songObject));
  };

  return (
    <ResultStyle>
      <div className="search-results">
        <h2 className="section-title">Resultados de Búsqueda</h2>

        {loading && <Spinner />}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && Array.isArray(results) && results.length > 0 && (
          <div className="songs-list">
            {results.map((song) => (
              <div key={song.idAlbum} className="song-card">
                <h3>{song.strAlbum || "Álbum desconocido"}</h3>
                <p>{song.strArtist || "Artista desconocido"}</p>
                <p>{song.strAlbum || "Nombre del álbum no disponible"}</p>

                <button onClick={() => handleAddSong(song)}>
                  Agregar a mi biblioteca
                </button>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && (!results || results.length === 0) && (
          <p className="no-result">No se encontraron resultados</p>
        )}
      </div>
    </ResultStyle>
  );
};

export default SearchResults;
