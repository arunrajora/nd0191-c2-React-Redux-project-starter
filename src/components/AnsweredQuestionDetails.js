import { useSelector } from 'react-redux';
import { selectAnsweredQuestionDetails } from '../store/questionsSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import AnsweredOption from './AnsweredOption';

function AnsweredQuestionDetails({ question_id }) {
  const {
    id,
    avatarURL,
    timestamp,
    optionOne,
    optionTwo,
    authedUser,
    optionOneVotes,
    optionTwoVotes,
    authorName,
  } = useSelector(selectAnsweredQuestionDetails(question_id));

  const totalVotes = optionOneVotes.length + optionTwoVotes.length;

  return (
    <div align='center'>
      <Card sx={{ maxWidth: 600, mt: 4 }} key={id}>
        <CardHeader
          avatar={<Avatar alt={authorName} src={avatarURL} />}
          title={`${authorName} asked`}
          subheader={timestamp}
        />
        <CardContent>
          <Typography variant='overline' color='text.secondary'>
            Would You Rather?
          </Typography>
          <AnsweredOption
            optionText={optionOne}
            optionVotes={optionOneVotes}
            totalVotes={totalVotes}
            authedUser={authedUser}
          />
          <Typography variant='body1' color='text.secondary' sx={{ my: 4 }}>
            OR
          </Typography>
          <AnsweredOption
            optionText={optionTwo}
            optionVotes={optionTwoVotes}
            totalVotes={totalVotes}
            authedUser={authedUser}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default AnsweredQuestionDetails;
