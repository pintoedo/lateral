import React from 'react';
import './filterBar.css';
import {
  faNewspaper,
  faQuestionCircle,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="source-filter">
        <span className="filter-header">Filters:</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faNewspaper} />
        <select className="filter-source">
          <option value="My sources">MY SOURCES</option>
          <option value="Suggested">SUGGESTED</option>
        </select>
      </div>
      <div>
        <FontAwesomeIcon icon={faClock} />
        <select className="filter-source">
          <option value="Past month">BY DATE</option>
          <option value="This week">THIS WEEK</option>
        </select>
      </div>
      <div className="source-filter">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div>
    </div>
  );
};

export default Filter;
