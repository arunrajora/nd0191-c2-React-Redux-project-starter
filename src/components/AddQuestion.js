import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveQuestion } from '../store/actions';
import { selectLoggedInUser } from '../store/authedUserSlice';

function AddQuestion(props) {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authedUser = useSelector(selectLoggedInUser);

  return (
    <Stack
      sx={{
        mt: 10,
      }}
    >
      <h1 align='center'>Would you rather?</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await dispatch(
            saveQuestion({
              author: authedUser.id,
              optionOneText,
              optionTwoText,
            })
          );
          if (response.error) {
            if (!optionOneText) {
              alert('Option One should not be empty');
            } else if (!optionTwoText) {
              alert('Option Two should not be empty');
            } else {
              alert('Failed to add question');
            }
          } else {
            navigate('/');
          }
        }}
      >
        <Stack
          spacing={3}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <TextField
            value={optionOneText}
            onChange={(event) => setOptionOneText(event.target.value)}
            id='outlined-basic'
            label='Option one text'
            variant='outlined'
            autoComplete='off'
            sx={{ m: 1, width: '48ch' }}
          />
          <span>OR</span>
          <TextField
            value={optionTwoText}
            onChange={(event) => setOptionTwoText(event.target.value)}
            id='outlined-basic'
            label='Option Two text'
            variant='outlined'
            autoComplete='off'
            sx={{ m: 1, width: '48ch' }}
          />
          <Button variant='contained' type='submit'>
            Create Question
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default AddQuestion;
