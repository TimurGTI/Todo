import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const TaskList = ({ tasks = [], onToggleComplete, onDelete, onEdit }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      created: PropTypes.string.isRequired,
    })
  ).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskList;
