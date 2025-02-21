import { authUserSuccess, logout } from "../actions/actionCreators";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case authUserSuccess.type: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case logout.type: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
}
