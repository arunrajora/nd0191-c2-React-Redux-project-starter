import { _saveQuestion } from './_DATA';

describe('_saveQuestion', () => {
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
