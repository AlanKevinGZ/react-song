import React, { Component } from "react";
import "./Song.css";
import SearchResults from "./SearchResults";

export const Song = ({ song, onAddToLibrary,showAddButton }) => {
  const handleAddClick = () => {
    onAddToLibrary(song);
  };

  return (
    <div className="song-card">
      <div className="song-info">
        <h3 className="song-title">{song.titleSong}</h3>
        <p className="song-artist">{song.artist}</p>
        <span className="song-duration">{song.duration}</span>
      </div>
        {!showAddButton ? ' ' : <button className="add-button" onClick={handleAddClick}>
          Agregar a mi biblioteca
        </button>}
      
    </div>
  );
};

export default Song;
