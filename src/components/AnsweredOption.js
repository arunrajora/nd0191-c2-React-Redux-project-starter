import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import AvatarGroup from '@mui/material/AvatarGroup';

function AnsweredOption({ optionText, optionVotes, totalVotes, authedUser }) {
  return (
    <>
      <Typography variant='h6' color='text.primary' sx={{ mt: 8 }}>
        {optionText}
      </Typography>
      <Typography variant='overline' color='text.primary' sx={{ mt: 8 }}>
        ({optionVotes.length} out of {totalVotes} votes)
      </Typography>
      <Typography variant='body2' color='text.primary'>
        {optionVotes.some(({ userId }) => userId === authedUser) &&
          'YOUR ANSWER'}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant='determinate'
            value={Math.round((optionVotes.length / totalVotes) * 100)}
            color='secondary'
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant='body2'
            color={
              optionVotes.includes(authedUser)
                ? 'text.primary'
                : 'text.secondary'
            }
          >{`${Math.round(
            (optionVotes.length / totalVotes) * 100
          )}%`}</Typography>
        </Box>
      </Box>
      <AvatarGroup max={4} align='left'>
        {optionVotes.map(({ userId, avatarURL }) => (
          <Avatar key={userId} alt={userId} src={avatarURL} />
        ))}
      </AvatarGroup>
    </>
  );
}

export default AnsweredOption;
