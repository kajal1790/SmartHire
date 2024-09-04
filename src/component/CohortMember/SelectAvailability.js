import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Helper function to generate time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 10; hour <= 17; hour++) {
    slots.push(`${hour}:00`);
    if (hour < 17) {
      slots.push(`${hour}:30`);
    }
  }
  return slots;
};

// Generate dates for a week
const generateDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
  }
  return dates;
};

// Generate initial grid data
const generateGridData = () => {
  const dates = generateDates();
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
  const [rowData, setRowData] = useState(generateGridData());

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
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout="autoHeight"
      />
      <button onClick={handleSubmit} style={{ marginTop: '10px', padding: '10px' }}>
        Submit
      </button>
    </div>
  );
};

// Custom cell renderer for time slots
const TimeSlotRenderer = (props) => {
  const { value, onSlotChange } = props;
  const [selected, setSelected] = React.useState(false);

  const handleChange = (e) => {
    const isSelected = e.target.checked;
    setSelected(isSelected);
    onSlotChange(props.data.date, value, isSelected);
  };

  return (
    <input
      type="checkbox"
      checked={selected}
      onChange={handleChange}
      style={{ margin: '0 auto', display: 'block' }}
    />
  );
};

export default SelectAvailability;
