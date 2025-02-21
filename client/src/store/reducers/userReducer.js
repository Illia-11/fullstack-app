import { createReducer } from "@reduxjs/toolkit";
import { authUserSuccess, logout } from "../actions/actionCreators";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case authUserSuccess.type: {
//       return {
//         ...state,
//         user: action.payload,
//       };
//     }
//     case logout.type: {
//       return {
//         ...state,
//         user: null,
//       };
//     }
//     default:
//       return state;
//   }
// }

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(authUserSuccess, (state, action) => {
    state.user = action.payload;
  });

  builder.addCase(logout, (state, action) => {
    state.user = null;
  });
});

export default userReducer;
