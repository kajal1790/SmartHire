import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UpcomingInterview from './UpcomingInterview'; // Ensure the path is correct
import SelectAvailability from './SelectAvailability'; // Ensure the path is correct
import InterviewHistory from './InterviewHistory'; // Ensure the path is correct

const CohortMemberHomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Default tab index (0 = UpcomingInterview)

  return (

    <div>

      <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
        <TabList style={{ display: 'flex', justifyContent: 'center', padding: '60px 0px 20px 0' , backgroundColor: 'darkslategray', color: '#ffffff', marginTop: '10px'}}>
          <Tab style={{ margin: '0 10px', cursor: 'pointer', border: 'none', borderRadius: 2, borderColor: '#fff'}}>Upcoming Interviews</Tab>
          <Tab style={{ margin: '0 10px', cursor: 'pointer', border: 'none', borderRadius: 2, borderColor: '#fff' }}>Select Availability</Tab>
          <Tab style={{ margin: '0 10px', cursor: 'pointer', border: 'none', borderRadius: 2, borderColor: '#fff' }}>Interview History</Tab>
        </TabList>

        <TabPanel>
          <UpcomingInterview />
        </TabPanel>
        <TabPanel>
          <SelectAvailability />
        </TabPanel>
        <TabPanel>
          <InterviewHistory />
        </TabPanel>
      </Tabs>
    </div>
  );
};


const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
},
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '30px',
    paddingTop: '70px'
  },
  button: {
    padding: '12px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '30%',
    textAlign: 'center',
  },
  calendarContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  },
  header: {
    marginBottom: '20px',
    fontSize: '20px',
    color: '#333',
    textAlign: 'center',
  },
  calendar: {
    width: '100%',
  },
  highlightedDate: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderRadius: '50%',
  },
};
export default CohortMemberHomePage;
