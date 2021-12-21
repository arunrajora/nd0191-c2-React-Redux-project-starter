import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getQuestions } from '../utils/_DATA';
import { saveQuestion, saveQuestionAnswer } from './actions';

const initialState = {};

export const getAllQuestions = createAsyncThunk(
  'questions/fetchAllQuestions',
  _getQuestions
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestions.fulfilled, (state, action) => {
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

export default questionsSlice.reducer;
