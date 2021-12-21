import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

describe('fake backend _saveQuestion()', () => {
  test('adds a question for a valid question', async () => {
    const question = {
      author: 'James',
      optionOneText: 'run',
      optionTwoText: 'walk',
    };
    const savedQuestion = await _saveQuestion(question);

    // Expect the question to have an id.
    expect(typeof savedQuestion.id).toBe('string');
    // Expect the question to have a timestamp.
    expect(typeof savedQuestion.timestamp).toBe('number');

    //Expect the question to have an author.
    expect(savedQuestion.author).toBe(question.author);

    // Expect the question to have the first option with 0 votes.
    expect(savedQuestion.optionOne.votes).toStrictEqual([]);
    expect(savedQuestion.optionOne.text).toBe(question.optionOneText);

    // Expect the question to have the second option with 0 votes.
    expect(savedQuestion.optionTwo.votes).toStrictEqual([]);
    expect(savedQuestion.optionTwo.text).toBe(question.optionTwoText);
  });

  test('throws an error for an invalid question missing the author', async () => {
    const invalidQuestion = {
      optionOneText: 'run',
      optionTwoText: 'walk',
    };
    await expect(_saveQuestion(invalidQuestion)).rejects.toMatch(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });

  test('throws an error for an invalid question missing the first option', async () => {
    const invalidQuestion = {
      author: 'James',
      optionTwoText: 'walk',
    };
    await expect(_saveQuestion(invalidQuestion)).rejects.toMatch(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });

  test('throws an error for an invalid question missing the second option', async () => {
    const invalidQuestion = {
      author: 'James',
      optionOneText: 'run',
    };
    await expect(_saveQuestion(invalidQuestion)).rejects.toMatch(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('fake backend _saveQuestionAnswer()', () => {
  test('adds an answer for a valid vote', async () => {
    const validVote = {
      authedUser: 'sarahedo',
      qid: 'vthrdm985a262al8qx3do',
      answer: 'optionOne',
    };
    const status = await _saveQuestionAnswer(validVote);
    expect(status).toBe(true);

    // Check if the question has actually been answered;
    const questions = await _getQuestions();

    expect(questions[validVote.qid].optionOne.votes).toContain(
      validVote.authedUser
    );
    expect(questions[validVote.qid].optionTwo.votes).not.toContain(
      validVote.authedUser
    );

    const users = await _getUsers();
    expect(users[validVote.authedUser].answers).toHaveProperty(
      validVote.qid,
      validVote.answer
    );
  });

  test('throws an error for an invalid vote missing authedUser', async () => {
    const invalidVote = {
      qid: 'vthrdm985a262al8qx3do',
      answer: 'optionOne',
    };
    await expect(_saveQuestionAnswer(invalidVote)).rejects.toMatch(
      'Please provide authedUser, qid, and answer'
    );
  });

  test('throws an error for an invalid vote missing qid', async () => {
    const invalidVote = {
      authedUser: 'sarahedo',
      answer: 'optionOne',
    };
    await expect(_saveQuestionAnswer(invalidVote)).rejects.toMatch(
      'Please provide authedUser, qid, and answer'
    );
  });

  test('throws an error for an invalid vote missing answer', async () => {
    const invalidVote = {
      authedUser: 'sarahedo',
      qid: 'vthrdm985a262al8qx3do',
    };
    await expect(_saveQuestionAnswer(invalidVote)).rejects.toMatch(
      'Please provide authedUser, qid, and answer'
    );
  });
});
