import React from "react";
import Song from "../Song";
import "./style.css";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../Spinner";
import ErrorMessage from "../../RetrySearch/RetrySearch";


const SearchResults = ({ query }) => {
  const { api, error, loading, refetch } = useFetch(
    query && query.trim() 
      ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(query.trim())}`
      : null
  );

 
  return (
  
    <div className="search-results">
   
      <h2 className="section-title">Resultados de Búsqueda</h2>
      
      {loading && <Spinner />}


  
      {!loading && !error && Array.isArray(api) && api.length > 0 && (
        <div className="songs-list">
          {api.map((song) => {
            return (
              <Song
                key={song.idAlbum}
                song={song}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;