import './App.css';
import Header from './components/Header/Header';
import Song from './components/Song/Song';

function App() {

   const song = {
    titleSong: "oh lord",
    artist: 'foxy shazam',
    duration: 4,
  };

    const song2 = {
    titleSong: "Sonne",
    artist: 'Rammstein',
    duration: 3,
  };


    const song3 = {
    titleSong: "INVISIBLE ",
    artist: ' Duran Duran',
    duration: 5,
  };

  return (
    <div className="App">
      <Header title='Music App'></Header>

      <Song song={song}/>
      <Song song={song2}/>
      <Song song={song3}/>
    </div>

    
  );
}

export default App;
