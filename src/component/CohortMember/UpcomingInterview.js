import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './UpcomingInterview.css';

// Mock data for interviews
const interviewData = {
  '2024-09-05': [
    { time: '10:00 AM', candidate: 'Alice Johnson' },
    { time: '11:00 AM', candidate: 'Bob Smith' },
    { time: '04:00 PM', candidate: 'Charlie Brown' },
    { time: '05:00 PM', candidate: 'Diana Ross' },
  ],
  '2024-09-06': [
    { time: '09:00 AM', candidate: 'Charlie Brown' },
    { time: '01:00 PM', candidate: 'Diana Ross' },
    { time: '04:00 PM', candidate: 'Charlie Brown' }
  ],
  '2024-09-07': [
    { time: '02:00 PM', candidate: 'Eva Green' },
    { time: '03:00 PM', candidate: 'Charlie Brown' },
    { time: '04:00 PM', candidate: 'Charlie Brown' },
    { time: '05:00 PM', candidate: 'Diana Ross' },
    
  ]
};

const UpcomingInterview = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [gridDimensions, setGridDimensions] = useState({ width: 600, height: 400 });
  const containerRef = useRef(null);

  const dateColumnDefs = [
    {
      headerName: 'Date',
      field: 'date',
      sortable: true,
      filter: true,
      cellStyle: { textAlign: 'center' } // Center align the text
    },
    {
      headerName: 'Number of Interviews',
      field: 'numInterviews',
      sortable: true,
      filter: true,
      cellStyle: { textAlign: 'center' } // Center align the text
    }
  ];

  const interviewColumnDefs = [
    {
      headerName: 'Time',
      field: 'time',
      sortable: true,
      filter: true,
      cellStyle: { textAlign: 'center' } // Center align the text
    },
    {
      headerName: 'Candidate',
      field: 'candidate',
      sortable: true,
      filter: true,
      cellStyle: { textAlign: 'center' } // Center align the text
    }
  ];

  const dateRowData = Object.keys(interviewData).map(date => ({
    date,
    numInterviews: interviewData[date].length
  }));

  const handleRowClick = (event) => {
    setSelectedDate(event.data.date);
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setGridDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate grid height based on the number of rows
  const calculateGridHeight = (numRows) => {
    const rowHeight = 50; // Height of each row in pixels
    const headerHeight = 40; // Height of the header in pixels
    return numRows * rowHeight + headerHeight;
  };

  return (
    <div className="UpcomingInterview" ref={containerRef} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div style={{width: '35%'}}>
        <h2 className= "header">Upcoming Schedule</h2>
        <div
          className="ag-theme-alpine"
          style={{ height: calculateGridHeight(dateRowData.length)}}
        >
          <AgGridReact
            columnDefs={dateColumnDefs}
            rowData={dateRowData}
            onRowClicked={handleRowClick}
          />
        </div>
      </div>
      <div style={{width: '35%'}}>
          {selectedDate && <DateDetails date={selectedDate} interviews={interviewData[selectedDate]} columnDefs={interviewColumnDefs} />}
      </div>
    </div>
  );
};

const DateDetails = ({ date, interviews, columnDefs }) => {
  const [gridDimensions, setGridDimensions] = useState({ width: 600, height: 400 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setGridDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate grid height based on the number of rows
  const calculateGridHeight = (numRows) => {
    const rowHeight = 50; // Height of each row in pixels
    const headerHeight = 40; // Height of the header in pixels
    return numRows * rowHeight + headerHeight;
  };

  return (
    <div className="date-details" ref={containerRef} style={{ width: '100%', height: '100vh' }}>
      <h2 className = "header">Interviews on {date}</h2>
      <div
        className="ag-theme-alpine"
        style={{ height: calculateGridHeight(interviews.length) }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={interviews}
        />
      </div>
    </div>
  );
};



export default UpcomingInterview;
