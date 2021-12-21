import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectIsQuestionAnswered } from '../store/usersSlice';
import AnsweredQuestionDetails from './AnsweredQuestionDetails';
import UnansweredQuestionDetails from './UnansweredQuestionDetails';

function QuestionDetails(props) {
  const { question_id } = useParams();
  const isQuestionAnswered = useSelector(selectIsQuestionAnswered(question_id));

  return isQuestionAnswered ? (
    <AnsweredQuestionDetails question_id={question_id} />
  ) : (
    <UnansweredQuestionDetails question_id={question_id} />
  );
}

export default QuestionDetails;
