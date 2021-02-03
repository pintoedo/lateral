import React from 'react';
import './filter.css';

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="source-filter">
        <span>Filters:</span>
      </div>
      <div className="source-filter">MY SOURCES</div>
      <div className="time-filter">PAST MONTH</div>
      <div className="source-filter">?</div>
    </div>
  );
};

export default Filter;
