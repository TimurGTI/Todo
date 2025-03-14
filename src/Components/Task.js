import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({
  task = { id: null, title: '', completed: false, created: null },
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  const [editedTitle, setEditedTitle] = React.useState(task.title);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(task.id, { title: editedTitle });
    setIsEditing(false);
  };

  const createdDate = task.created ? new Date(task.created) : null;

  console.log('Task created', task.created);
  console.log('Created Date:', createdDate);
  console.log('Task', task);

  return (
    <li className={task.completed ? 'completed' : isEditing ? 'editing' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
        <label>
          <span className="description">{task.title}</span>
          <span className="created">
            {' '}
            {createdDate && !isNaN(createdDate.getTime())
              ? `created ${formatDistanceToNow(createdDate, { addSuffix: true })}`
              : 'Invalid date'}
          </span>
        </label>

        <button className="icon icon-edit" onClick={handleEdit}></button>
        <button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
      </div>
      {isEditing && (
        <input
          type="text"
          className="edit"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSaveEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSaveEdit();
            } else if (e.key === 'Escape') {
              setIsEditing(false);
            }
          }}
        />
      )}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    titel: PropTypes.string,
    completed: PropTypes.bool,
    created: PropTypes.string,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Task;
