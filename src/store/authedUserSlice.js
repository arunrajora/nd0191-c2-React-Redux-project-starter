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

export default questionsSlice.reducer;
