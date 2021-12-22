import { createAsyncThunk } from '@reduxjs/toolkit';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { login } from './authedUserSlice';
import { getAllQuestions } from './questionsSlice';
import { getAllUsers } from './usersSlice';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const loadInitialData = () => async (dispatch) => {
  dispatch(showLoading());
  await Promise.all([dispatch(getAllQuestions()), dispatch(getAllUsers())]);
  dispatch(hideLoading());
};

export const saveQuestion = createAsyncThunk('all/saveQuestion', _saveQuestion);

export const saveQuestionAnswer = createAsyncThunk(
  'all/saveQuestionAnswer',
  async (answer) => {
    await _saveQuestionAnswer(answer);
    return answer;
  }
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

export const selectIsDataLoading = ({ loadingBar }) => loadingBar.default === 1;
