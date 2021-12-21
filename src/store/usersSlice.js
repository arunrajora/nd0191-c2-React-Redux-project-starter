import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getUsers } from '../utils/_DATA';
import { saveQuestion, saveQuestionAnswer } from './actions';

const initialState = {};

export const getAllUsers = createAsyncThunk('users/fetchAllUsers', _getUsers);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {})
      .addCase(getAllUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(saveQuestion.fulfilled, (state, action) => {
        // TODO: Add question
      })
      .addCase(saveQuestionAnswer.fulfilled, (state, action) => {
        // TODO: Add question answer
      });
  },
});

export default usersSlice.reducer;
