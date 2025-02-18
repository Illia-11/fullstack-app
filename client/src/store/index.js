import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

// створення стори станів редаксу
const store = createStore(counterReducer);

export default store;
