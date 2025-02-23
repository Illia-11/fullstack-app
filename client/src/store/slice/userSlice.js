import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { refreshSession, registerUser } from "../../api";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const SLICE_NAME = "user";

/*
  createAsyncThunk - функція для полегшення створення асинхронних запитів у редаксі
    приймає:
      1. приставка для екшн тайпів, повʼязаних з запитом
      2. асинхрона функція
*/
const refresh = createAsyncThunk(
  `${SLICE_NAME}/refresh`,
  async (refreshToken, thunkAPI) => {
    try {
      const user = await refreshSession(refreshToken);

      // якщо з коллбека щось повернути це сигналізує що можемо запускати екшн на успішне отримання даних
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const login = createAsyncThunk(
  `${SLICE_NAME}/login`,
  async (userData, thunkAPI) => {
    try {
      const user = await login(userData);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const registration = createAsyncThunk(
  `${SLICE_NAME}/registration`,
  async (userData, thunkAPI) => {
    try {
      const user = await registerUser(userData);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const userSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  // тут тільки синхронні екшени які повʼязані цим слайсом
  reducers: {
    // userAuthSuccess: (state, action) => {
    //   state.user = action.payload;
    // },
    logout: () => {
      return initialState;
    },
  },
  // тут реакції на інші екшени, в тому числі асинхроні
  extraReducers: (builder) => {
    // описуємо що відбувається коли запит ініціюється
    builder.addCase(refresh.pending, (state) => {
      state.isLoading = true;
    });

    // описуємо що відбувається коли запит виконаний успішно
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });

    // описуємо що відбувається коли запит виконаний неуспішно
    builder.addCase(refresh.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });

    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  },
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
export const { userAuthSuccess, logout } = actions;
export { refresh, login, registration };
