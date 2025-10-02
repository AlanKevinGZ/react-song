import { configureStore } from "@reduxjs/toolkit";
import songReduce from "./slices/librarySlice";
import searchReduce from "./slices/searchSlice";



export const store = configureStore({
  reducer: {
    library:songReduce, 
    search: searchReduce,   
  },
});
