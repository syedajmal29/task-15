import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className='d-flex mb-4 flex-column text-center'>
      <span className='h5'>MY TODOS</span>
      <div className="filter text-end mt-4">
        <span className='h5 m-1'>Status Filter : </span>
        <select 
          className='p-1 bg-secondary text-light'
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Not Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;