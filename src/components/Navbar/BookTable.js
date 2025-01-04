import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookTable.css';

const BookTable = () => {
  const [tables, setTables] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      status: ['empty', 'red-slotted', 'green-slotted'][Math.floor(Math.random() * 3)],
    }))
  );
  const navigate = useNavigate();

  const handleTableClick = (table) => {
    if (table.status === 'green-slotted') {
      navigate(`/userdetails/${table.id}`);
    } else if (table.status === 'empty') {
      alert('This table is in the waiting list.');
    } else {
      alert('This table is already booked!');
    }
  };

  return (
    <div className="bookTable">
      <h2>BookTable</h2>
      <div className="tables__grid">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`table ${table.status}`}
            onClick={() => handleTableClick(table)}
          >
            Table {table.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTable;
