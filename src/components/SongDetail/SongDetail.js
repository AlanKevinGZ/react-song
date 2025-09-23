import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useParams } from "react-router-dom";
import Song from "../Song/Song";

function SongDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { showDetail } = location.state || {};
 

  const { api, error, loading } = useFetch(
    `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`
  );

  return (
    <div>
      <div className="songs-list">
        {api.map((song) => (
          <Song key={song.idAlbum} song={song}   showDetail={showDetail} />
        ))}
      </div>
    </div>
  );
}

export default SongDetail;
