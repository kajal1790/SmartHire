// AdminHomepage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar

const AdminHomepage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const highlightedDates = [
    new Date(2024, 8, 10),
    new Date(2024, 8, 15),
    new Date(2024, 8, 20),
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (highlightedDates.find((d) => d.toDateString() === date.toDateString())) {
        return 'highlighted-date';
      }
    }
    return null;
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Register Cohort Member</button>
        <button style={styles.button}>Create New Interview Schedule</button>
      </div>

      <div style={styles.calendarContainer}>
        <h2 style={styles.header}>Existing Schedule</h2>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={tileClassName}
          style={styles.calendar}
        />
      </div>
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

export default AdminHomepage;
