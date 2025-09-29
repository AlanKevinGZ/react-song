import React from "react";
import { LibraryStyle } from "./styles";
import { useSelector,useDispatch } from "react-redux";
import { removeSong } from "../../../redux/actions/libraryActions";

function Library() {
  const songs = useSelector((state) => state.SongReduce.songs);
const dispatch = useDispatch();
  
  const handleDeteleSong = (id) =>{
    console.log(id);
    dispatch(removeSong(id))
  }

  return (
    <LibraryStyle>
      <div className="library">
        <h2 className="library-title">Mi Biblioteca</h2>
        <ul>
          {songs.length > 0 ? (
            songs.map((song) => (
              <li key={song.name.id}>
               Artista:  {song.name.artist} - Album: {song.name.album} 

               <button onClick={()=>handleDeteleSong(song.name.id)}>Eliminar</button>
              </li>
            ))
          ) : (
            <li>No hay canciones en la biblioteca</li>
          )}
        </ul>
      </div>
    </LibraryStyle>
  );
}

export default Library;
