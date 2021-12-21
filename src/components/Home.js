import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllFilteredQuestions,
  ANSWERED,
  UNANSWERED,
} from '../store/questionsSlice';

function Home() {
  const [selectedTab, setSelectedTab] = useState(UNANSWERED);
  const allFilteredQuestions = useSelector(
    selectAllFilteredQuestions(selectedTab)
  );

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label='Unanswered' value={UNANSWERED} />
          <Tab label='Answered' value={ANSWERED} />
        </Tabs>
      </Box>
      {allFilteredQuestions?.map((question) => (
        <div key={question.id}>{question.optionOne.text}</div>
      ))}
    </div>
  );
}

export default Home;
