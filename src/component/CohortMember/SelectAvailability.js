import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Helper function to generate time slots with 1-hour intervals
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 10; hour <= 17; hour++) {
    const period = hour < 12 ? 'AM' : 'PM';
    const hourIn12 = hour > 12 ? hour - 12 : hour;
    slots.push(`${hourIn12}:00 ${period}`);
  }
  return slots;
};

// Generate dates starting from today for the next 7 days
const generateDates = (numDays = 7) => {
  const today = new Date();
  const dates = [];
  for (let i = 0; i < numDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
  }
  return dates;
};

// Generate initial grid data
const generateGridData = (numDays = 7) => {
  const dates = generateDates(numDays);
  const timeSlots = generateTimeSlots();

  return dates.map(date => ({
    date,
    timeSlots: timeSlots.map(slot => ({
      slot,
      selected: false
    }))
  }));
};

const SelectAvailability = () => {
  const [rowData, setRowData] = useState(() => generateGridData());

  // Handle slot change
  const handleSlotChange = (date, slot, isSelected) => {
    setRowData(prevRowData =>
      prevRowData.map(row =>
        row.date === date
          ? {
              ...row,
              timeSlots: row.timeSlots.map(ts =>
                ts.slot === slot ? { ...ts, selected: isSelected } : ts
              )
            }
          : row
      )
    );
  };

  const timeSlots = generateTimeSlots(); // Get time slots for columns
  const columnDefs = [
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    ...timeSlots.map(slot => ({
      headerName: slot,
      field: slot,
      cellRendererFramework: TimeSlotRenderer,
      cellRendererParams: { onSlotChange: handleSlotChange }
    }))
  ];

  const handleSubmit = () => {
    const selectedSlots = rowData.flatMap(row =>
      row.timeSlots.filter(ts => ts.selected).map(ts => ({
        date: row.date,
        slot: ts.slot
      }))
    );
    console.log('Selected Slots:', selectedSlots);
    // Implement submission logic here
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Available Slots</h1>
      <div
        className="ag-theme-alpine"
        style={{ height: 'auto', width: '100%', display: 'inline-block' }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          domLayout="autoHeight"
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        Submit Available Slots
      </button>
    </div>
  );
};

// Custom cell renderer for time slots
const TimeSlotRenderer = (props) => {
  const { value, onSlotChange } = props;
  const [selected, setSelected] = React.useState(
    props.data.timeSlots.find(ts => ts.slot === value)?.selected || false
  );

  const handleChange = (e) => {
    const isSelected = e.target.checked;
    setSelected(isSelected);
    onSlotChange(props.data.date, value, isSelected);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: selected ? 'green' : 'transparent',
        color: selected ? 'white' : 'black',
        borderRadius: '4px',
        padding: '5px',
        cursor: 'pointer',
        height: '100%',
        lineHeight: 'normal'
      }}
    >
      <input
        type="checkbox"
        checked={selected}
        onChange={handleChange}
        style={{
          marginRight: '5px'
        }}
      />
      {value}
    </div>
  );
};

export default SelectAvailability;
