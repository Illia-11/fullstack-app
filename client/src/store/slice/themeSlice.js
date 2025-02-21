import { createSlice } from '@reduxjs/toolkit';
import CONSTANTS from '../../constants';

const { THEME } = CONSTANTS;

const SLICE_NAME = 'theme';

const themeSlice = createSlice({
  name: SLICE_NAME,
  initialState: THEME.DARK_THEME,
  reducers: {
    changeTheme: (state, action) => action.payload,
  },
});

const { reducer: themeReducer, actions } = themeSlice;

export default themeReducer;
export const { changeTheme } = actions;