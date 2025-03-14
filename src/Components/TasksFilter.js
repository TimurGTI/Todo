import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ onFilterChange = () => {} }) => {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => onFilterChange('all')}>All</button>
      </li>
      <li>
        <button onClick={() => onFilterChange('active')}>Active</button>
      </li>
      <li>
        <button onClick={() => onFilterChange('completed')}>Completed</button>
      </li>
    </ul>
  );
};

TasksFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default TasksFilter;
