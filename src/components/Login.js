import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../store/actions';
import { useLocation, useNavigate } from 'react-router-dom';

function Login(props) {
  const [userId, setUserId] = useState('');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  const dispatch = useDispatch();

  return (
    <div>
      <h1 align='center'>LOGIN</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const isAuthenticated = dispatch(authenticateUser(userId, password));
          if (isAuthenticated) {
            navigate(state || '/');
          } else {
            alert('Invalid user id or password.');
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
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            id='outlined-basic'
            label='User Id'
            variant='outlined'
            sx={{ m: 1, width: '48ch' }}
          />
          <FormControl sx={{ m: 1, width: '48ch' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              autoComplete='password'
              onChange={(event) => setPassword(event.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Login;
