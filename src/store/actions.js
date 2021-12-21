import { createAsyncThunk } from '@reduxjs/toolkit';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { login } from './authedUserSlice';

import { getAllQuestions } from './questionsSlice';
import { getAllUsers } from './usersSlice';

export const loadInitialData = () => (dispatch) => {
  dispatch(getAllQuestions());
  dispatch(getAllUsers());
};

export const saveQuestion = createAsyncThunk('all/saveQuestion', _saveQuestion);

export const saveQuestionAnswer = createAsyncThunk(
  'all/saveQuestionAnswer',
  _saveQuestionAnswer
);

export const authenticateUser = (userId, password) => (dispatch, getState) => {
  const foundUser = Object.values(getState().users ?? {}).some(
    (user) => user.id === userId && user.password === password
  );
  if (foundUser) {
    dispatch(login(userId));
  }
  return foundUser;
};
