import { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

import {
  selectAllFilteredQuestions,
  ANSWERED,
  UNANSWERED,
} from '../store/questionsSlice';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedTab, setSelectedTab] = useState(UNANSWERED);
  const allFilteredQuestions = useSelector(
    selectAllFilteredQuestions(selectedTab)
  );

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  console.log(allFilteredQuestions);

  return (
    <div align='center'>
      <Box sx={{ width: '100%' }}>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label='Unanswered' value={UNANSWERED} />
          <Tab label='Answered' value={ANSWERED} />
        </Tabs>
      </Box>
      {allFilteredQuestions?.map(
        ({ id, avatarURL, author, timestamp, optionOne, optionTwo }) => (
          <Card sx={{ maxWidth: 345, mt: 4 }} key={id}>
            <CardHeader
              avatar={<Avatar alt={author} src={avatarURL} />}
              title={`${author} ${
                selectedTab === UNANSWERED ? 'asks' : 'asked'
              }`}
              subheader={timestamp}
            />
            <CardContent>
              <Typography variant='overline' color='text.secondary'>
                Would You Rather?
              </Typography>
              <Typography variant='h6' color='text.primary'>
                {optionOne}
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                OR
              </Typography>
              <Typography variant='h6' color='text.primary'>
                {optionTwo}
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                ?
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color='info'
                fullWidth
                size='large'
                variant='contained'
                component={Link}
                to={`questions/${id}`}
              >
                {selectedTab === UNANSWERED ? 'Vote' : 'View Results'}
              </Button>
            </CardActions>
          </Card>
        )
      )}
    </div>
  );
}

export default Home;
