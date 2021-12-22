import { useDispatch, useSelector } from 'react-redux';
import { selectUnansweredQuestionDetails } from '../store/questionsSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { useState } from 'react';
import { saveQuestionAnswer } from '../store/actions';

function UnansweredQuestionDetails({ question_id }) {
  const [selectedOption, setSelectedOption] = useState('optionOne');

  const dispatch = useDispatch();
  const {
    id,
    authorName,
    avatarURL,
    timestamp,
    optionOne,
    optionTwo,
    authedUser,
  } = useSelector(selectUnansweredQuestionDetails(question_id));

  return (
    <div align='center'>
      <Card sx={{ maxWidth: 600, mt: 4 }} key={id}>
        <CardHeader
          avatar={<Avatar alt={authorName} src={avatarURL} />}
          title={`${authorName} asks`}
          subheader={timestamp}
        />
        <CardContent>
          <Typography variant='overline' color='text.secondary'>
            Would You Rather?
          </Typography>
          <FormControl>
            <RadioGroup
              aria-label='gender'
              value={selectedOption}
              name='radio-buttons-group'
              onChange={(event, newValue) => setSelectedOption(newValue)}
            >
              <FormControlLabel
                sx={{ mt: 8 }}
                value='optionOne'
                control={<Radio />}
                label={
                  <Typography variant='h6' color='text.primary'>
                    {optionOne}
                  </Typography>
                }
              />
              <Typography variant='body1' color='text.secondary' sx={{ my: 4 }}>
                OR
              </Typography>
              <FormControlLabel
                value='optionTwo'
                control={<Radio />}
                label={
                  <Typography variant='h6' color='text.primary'>
                    {optionTwo}
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
          <QuestionMarkIcon color='info' fontSize='large' />
        </CardContent>
        <CardActions>
          <Button
            color='info'
            fullWidth
            size='large'
            variant='contained'
            onClick={() => {
              dispatch(
                saveQuestionAnswer({
                  authedUser: authedUser,
                  qid: id,
                  answer: selectedOption,
                })
              );
            }}
          >
            Vote
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UnansweredQuestionDetails;
