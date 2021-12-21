import { useParams } from 'react-router-dom';

function QuestionDetails(props) {
  const { question_id } = useParams();
  return <div>Question details {question_id}</div>;
}

export default QuestionDetails;
