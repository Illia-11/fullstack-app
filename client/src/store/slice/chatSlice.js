import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createChat, createMessage, getChats, getMessages } from "../../api";

const initialState = {
  chats: [],
  currentChat: null,
  isLoading: false,
  error: null,
};

const SLICE_NAME = "chat";

export const chatCreate = createAsyncThunk(
  `${SLICE_NAME}/createChat`,
  async ({ title, userIds }, thunkAPI) => {
    try {
      return await createChat(title, userIds);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const chatsGet = createAsyncThunk(
  `${SLICE_NAME}/chats`,
  async (userId, thunkAPI) => {
    try {
      return await getChats(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const messageCreate = createAsyncThunk(
  `${SLICE_NAME}/sendMessage`,
  async ({ chatId, body, userId }, thunkAPI) => {
    try {
      return await createMessage({ chatId, body, userId });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const getChatMessages = createAsyncThunk(
  `${SLICE_NAME}/getMessages`,
  async (chatId, thunkAPI) => {
    try {
      return await getMessages(chatId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const chatSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {
    currentChatSelect: (state, action) => {
      state.currentChat = state.chats.find(
        (chat) => chat.id === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(chatsGet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(chatsGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.chats = action.payload;
      })
      .addCase(chatsGet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getChatMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChatMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentChat.messages = action.payload;
      })
      .addCase(getChatMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(chatCreate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(chatCreate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.chats.push(action.payload);
      })
      .addCase(chatCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(messageCreate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(messageCreate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        Array.isArray(state.currentChat.messages)
          ? state.currentChat.messages.push(action.payload)
          : [action.payload];
      })
      .addCase(messageCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

const { reducer: chatReducer } = chatSlice;

export default chatReducer;
export const { currentChatSelect } = chatSlice.actions;
