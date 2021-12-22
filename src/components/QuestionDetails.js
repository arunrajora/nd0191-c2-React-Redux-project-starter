import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectIsQuestionValid } from '../store/questionsSlice';
import { selectIsQuestionAnswered } from '../store/usersSlice';
import AnsweredQuestionDetails from './AnsweredQuestionDetails';
import UnansweredQuestionDetails from './UnansweredQuestionDetails';

function QuestionDetails(props) {
  const { question_id } = useParams();
  const doesQuestionExist = useSelector(selectIsQuestionValid(question_id));
  const isQuestionAnswered = useSelector(selectIsQuestionAnswered(question_id));

  if (!doesQuestionExist) {
    return <h1 align='center'>404 page- Question does not exist.</h1>;
  }
  return isQuestionAnswered ? (
    <AnsweredQuestionDetails question_id={question_id} />
  ) : (
    <UnansweredQuestionDetails question_id={question_id} />
  );
}

export default QuestionDetails;
