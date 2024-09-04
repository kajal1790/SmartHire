import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Sample data for interviews
const generateInterviewData = () => {
  return [
    {
      interviewDate: '2024-09-01',
      interviewSlot: '10:00 AM',
      candidateName: 'John Doe',
      interviewType: 'Technical',
      feedbackForm: 'View'
    },
    {
      interviewDate: '2024-09-02',
      interviewSlot: '11:00 AM',
      candidateName: 'Jane Smith',
      interviewType: 'Behavioral',
      feedbackForm: 'View'
    },
    // Add more sample data as needed
  ];
};

const InterviewHistory = () => {
  const columnDefs = [
    { headerName: 'Interview Date', field: 'interviewDate', sortable: true, filter: true },
    { headerName: 'Interview Slot', field: 'interviewSlot', sortable: true, filter: true },
    { headerName: 'Candidate Name', field: 'candidateName', sortable: true, filter: true },
    { headerName: 'Interview Type', field: 'interviewType', sortable: true, filter: true },
    {
      headerName: 'Feedback Form',
      field: 'feedbackForm',
      cellRendererFramework: FeedbackFormRenderer
    }
  ];

  const rowData = generateInterviewData();

  return (
    <div className="interview-history-container">
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Interview History</h1>
      <div
        className="ag-theme-alpine interview-history-grid"
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

// Custom cell renderer for feedback form
const FeedbackFormRenderer = (props) => {
  const handleClick = () => {
    alert('Feedback form link clicked!');
    // Implement feedback form link or button functionality here
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        padding: '5px 10px'
      }}
    >
      {props.value}
    </button>
  );
};

export default InterviewHistory;
