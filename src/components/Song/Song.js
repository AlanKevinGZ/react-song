import React, { Component, use, useEffect } from "react";
import "./Song.css";
import { useNavigate } from "react-router-dom";

export const Song = ({ song,showDetail=true }) => {
   const navigate = useNavigate();

  const handleInfoClick = (id) => {
    navigate(`/song/${id}`, { state: { showDetail: false } });
  };

  


   return (
    <div className="song-card">
      <div className="song-info">
        <h3 className="song-title">{song.strAlbum || "Álbum desconocido"}</h3>
        <p className="song-artist">{song.strArtist || "Artista desconocido"}</p>
        <span className="song-duration">
          {song.intYearReleased || "Año no disponible"}
        </span>
        {song.strGenre && <span className="song-genre"> | {song.strGenre}</span>}
      </div>

      {showDetail ?  <button className="add-button" onClick={()=>handleInfoClick(song.idAlbum)}>
          Mas Informacion
      </button> : ''  }
     
      
    </div>
  );
};

export default Song;
