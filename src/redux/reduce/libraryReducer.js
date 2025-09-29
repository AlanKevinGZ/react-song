
const initialState = {
  songs: [],
};


const SongReduce = (state = initialState, action) => {
  
  switch (action.type) {
    case "ADD_SONG":
      
        if (state.songs.find((song) => {
           return song.name.id === action.payload.name.id
        })) {
        return state; 
      }
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };

    case "REMOVE_SONG":
      return {
        ...state,
        songs: [...state.songs.filter((song) => {
          return song.name.id !== action.payload
        })],
      };

    default:
      return state; 
  }
};

export default SongReduce;
