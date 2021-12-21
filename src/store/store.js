import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice';
import usersReducer from './usersSlice';
import authedUserReducer from './authedUserSlice';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer,
    authedUser: authedUserReducer,
  },
});
