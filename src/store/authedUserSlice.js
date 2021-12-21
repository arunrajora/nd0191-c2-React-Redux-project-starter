import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const questionsSlice = createSlice({
  name: 'authedUser',
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

export const { login, logout } = questionsSlice.actions;

export const selectIsUserLoggedIn = ({ authedUser }) => authedUser;

export const selectLoggedInUser = ({ authedUser, users }) =>
  authedUser && users[authedUser];

export default questionsSlice.reducer;
