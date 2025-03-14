import React, { useEffect, useState } from 'react';

import TaskList from './Components/TaskList';
import NewTaskForm from './Components/NewTaskForm';
import Footer from './Components/Footer';

const App = () => {
  console.log(localStorage.getItem('tasks') || []);
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks') || '[]')); // это очень плохо
  const [filter, setFilter] = useState('all');
  console.log(tasks);

  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);
  const addTask = (newTask) => {
    setTasks((tasks) => [...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="todoapp">
      <NewTaskForm onAddTask={addTask} />
      <TaskList tasks={filteredTasks} onToggleComplete={toggleComplete} onDelete={deleteTask} onEdit={editTask} />
      <Footer
        tasksLeft={tasks.filter((task) => !task.completed).length}
        onFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default App;
