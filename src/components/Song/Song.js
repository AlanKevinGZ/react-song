import React, { Component, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SongStyle } from "./styles";
import { addSongs } from "../../redux/actions/libraryActions";

export const Song = ({ song, showDetail = true }) => {
  const navigate = useNavigate();

  const dispach = useDispatch();

  const handleInfoClick = (id) => {
    navigate(`/song/${id}`, { state: { showDetail: false } });
  };
 
  const handleAddSong = (libSong) => {
    let songObjet = {
      id: libSong.idAlbum,
      artist: libSong.strArtist,
      album: libSong.strAlbum,
    };

    dispach(addSongs(songObjet));
  };

  return (
    <SongStyle>
      <div className="song-card">
        <div className="song-info">
          <h3 className="song-title">{song.strAlbum || "Álbum desconocido"}</h3>
          <p className="song-artist">
            {song.strArtist || "Artista desconocido"}
          </p>
          <span className="song-duration">
            {song.intYearReleased || "Año no disponible"}
          </span>
          {song.strGenre && (
            <span className="song-genre"> | {song.strGenre}</span>
          )}
        </div>

        {showDetail ? (
          <button
            className="add-button"
            onClick={() => handleInfoClick(song.idAlbum)}
          >
            Mas Informacion
          </button>
        ) : (
          ""
        )}
        <button onClick={() => handleAddSong(song)} className="add_btn">
          Agregar a la biblioteca
        </button>
      </div>
    </SongStyle>
  );
};

export default Song;
