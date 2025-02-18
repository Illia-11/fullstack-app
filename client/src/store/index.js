import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// створення стори станів редаксу
const store = createStore(counterReducer, composeWithDevTools());

export default store;
