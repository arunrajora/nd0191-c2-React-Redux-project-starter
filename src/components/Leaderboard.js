import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectLeaderboardData } from '../store/usersSlice';
import { Stack } from '@mui/material';

function Leaderboard(props) {
  const users = useSelector(selectLeaderboardData);

  return (
    <div>
      <h1 align='center'>LEADERBOARD</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Asked</TableCell>
              <TableCell align='right'>Answered</TableCell>
              <TableCell align='right'>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Stack direction='row' alignItems='center' spacing={2}>
                    <Avatar
                      alt={user.name}
                      src={user.avatarURL}
                      sx={{ width: 48, height: 48 }}
                      variant='rounded'
                    />
                    <span>{user.name}</span>
                  </Stack>
                </TableCell>
                <TableCell align='right'>{user.questionsAsked}</TableCell>
                <TableCell align='right'>{user.questionsAnswered}</TableCell>
                <TableCell align='right'>{user.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Leaderboard;
