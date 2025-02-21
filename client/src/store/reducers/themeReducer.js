import { setTheme } from "../actions/actionCreators";
import CONSTANTS from "../../constants";
import { createReducer } from "@reduxjs/toolkit";

const { THEME } = CONSTANTS;

const initialState = THEME.LIGHT_THEME;

// export const themeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case setTheme.type: {
//       return state === THEME.LIGHT_THEME ? THEME.DARK_THEME : THEME.LIGHT_THEME;
//     }
//     default:
//       return state;
//   }
// };

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(setTheme, (state) => {
    return state === THEME.LIGHT_THEME ? THEME.DARK_THEME : THEME.LIGHT_THEME;
  });
});

export default themeReducer;