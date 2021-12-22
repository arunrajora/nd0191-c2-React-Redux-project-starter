import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
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
        state[action.payload.id] = action.payload;
      })
      .addCase(saveQuestionAnswer.fulfilled, (state, action) => {
        state[action.payload.qid][action.payload.answer].votes.push(
          action.payload.authedUser
        );
      });
  },
});

export const [UNANSWERED, ANSWERED] = [0, 1];

export const selectAllFilteredQuestions =
  (questionType) =>
  ({ questions, authedUser, users }) => {
    return (
      questions &&
      Object.values(questions).filter((question) => {
        const isAnswered = users[authedUser].answers.hasOwnProperty(
          question.id
        );
        return questionType === ANSWERED ? isAnswered : !isAnswered;
      })
    )
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(({ id, optionOne, optionTwo, author, timestamp }) => ({
        id,
        author,
        optionOne: optionOne.text,
        optionTwo: optionTwo.text,
        avatarURL: users[author].avatarURL,
        timestamp: moment(timestamp).fromNow(),
      }));
  };

export const selectUnansweredQuestionDetails =
  (question_id) =>
  ({ questions, users, authedUser }) => {
    const { id, optionOne, optionTwo, author, timestamp } =
      questions[question_id];
    return {
      id,
      author,
      authedUser,
      optionOne: optionOne.text,
      optionTwo: optionTwo.text,
      avatarURL: users[author].avatarURL,
      timestamp: moment(timestamp).fromNow(),
    };
  };

export default questionsSlice.reducer;
