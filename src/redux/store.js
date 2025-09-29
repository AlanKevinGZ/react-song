
import { createStore } from "redux"
import rootReduce from "./reduce";

const store = createStore(rootReduce)


export  default store;