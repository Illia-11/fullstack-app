import userReducer from "./userReducer";
import counterReducer from "../slice/counterSlice";
import themeReducer from "./themeReducer";

const rootReducer = {
  user: userReducer,
  counter: counterReducer,
  theme: themeReducer
};

export default rootReducer;
