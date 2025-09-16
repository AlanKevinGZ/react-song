import React from 'react'
import './style.css'
import Song from '../Song';

function Library({ songs }) {
 return (
    <div className="library">
      <h2 className="library-title">Mi Biblioteca</h2>
      <div className="library-songs">
          {songs.map(song => (
            <Song 
              key={song.id}
              song={song}
              showAddButton={false}
            />
          ))}
        </div>
    </div>
  );
    
}

export default Library 