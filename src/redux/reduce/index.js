
import { combineReducers } from "redux";
import SongReduce from "./libraryReducer";

//El objeto que le pasas define las claves del estado global.
const rootReduce = combineReducers({
    SongReduce
})


export default rootReduce 