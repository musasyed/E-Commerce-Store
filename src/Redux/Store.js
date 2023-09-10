import { createStore } from "redux";
import actionReducer from "./Reducers/actionReducer";

const store=createStore(actionReducer);

export default store;
