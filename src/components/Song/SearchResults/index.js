
import React from 'react';
import Song from '../Song';
import './style.css';

const SearchResults = ({ songs, onAddToLibrary }) => {
  return (
    <div className="search-results">
      <h2 className="section-title">Resultados de Búsqueda</h2>
      <div className="songs-list">
        {songs.map(song => (
          <Song
            key={song.id}
            song={song}
            onAddToLibrary={onAddToLibrary}
            showAddButton={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
