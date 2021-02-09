import React from 'react';
import styled from 'styled-components';
import {
  faNewspaper,
  faQuestionCircle,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterBar = () => {
  return (
    <FilterDiv>
      <div>
        <FilterTitle className="filter-header">Filters:</FilterTitle>
      </div>
      <div>
        <FontAwesomeIcon icon={faNewspaper} />
        <FilterSelect>
          <option value="My sources">MY SOURCES</option>
          <option value="Suggested">SUGGESTED</option>
        </FilterSelect>
      </div>
      <div>
        <FontAwesomeIcon icon={faClock} />
        <FilterSelect>
          <option value="Past month">BY DATE</option>
          <option value="This week">THIS WEEK</option>
        </FilterSelect>
      </div>
      <div>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div>
    </FilterDiv>
  );
};

//STYLING

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  font-family: 'Avenir Next', 'Lato', sans-serif;
  color: #0083ee;
`;

const FilterSelect = styled.select`
  border-style: none;
  color: #0083ee;
`;

const FilterTitle = styled.span`
  color: rgb(126, 126, 126);
  font-weight: 600;
`;

export default FilterBar;
