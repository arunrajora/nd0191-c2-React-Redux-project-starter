import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

const [UNANSWERED, ANSWERED] = [0, 1];

function Home() {
  const [selectedTab, setSelectedTab] = useState(UNANSWERED);

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
    </div>
  );
}

export default Home;
