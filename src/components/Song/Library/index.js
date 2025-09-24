import React from 'react'

import Song from '../Song';
import { LibraryStyle } from './styles';

function Library({ songs }) {
 return (
  <LibraryStyle>
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
    </LibraryStyle>
  );
    
}

export default Library 