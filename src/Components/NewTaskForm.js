import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onAddTask = () => {} }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title: title,
        completed: false,
        created: new Date().toISOString(),
      };
      onAddTask(newTask);
      setTitle('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
