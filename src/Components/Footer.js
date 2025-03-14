import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from './TasksFilter';

const Footer = ({ tasksLeft = 0, onClearCompleted = () => {}, onFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksLeft} items left</span>
      <TasksFilter onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  tasksLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  onClearCompleted: PropTypes.func,
  onFilterChange: PropTypes.func.isRequired,
};

export default Footer;
