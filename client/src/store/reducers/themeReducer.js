import ACTION_TYPES from "../actions/actionTypes";

const initialState = ACTION_TYPES.LIGHT_THEME;

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME: {
      return state === ACTION_TYPES.LIGHT_THEME
        ? ACTION_TYPES.DARK_THEME
        : ACTION_TYPES.LIGHT_THEME;
    }
    default:
      return state;
  }
};

export const setTheme = () => ({
  type: ACTION_TYPES.SET_THEME,
});
