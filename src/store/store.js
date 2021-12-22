import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice';
import usersReducer from './usersSlice';
import authedUserReducer from './authedUserSlice';
import { loadingBarReducer } from 'react-redux-loading-bar';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer,
    authedUser: authedUserReducer,
    loadingBar: loadingBarReducer,
  },
});
