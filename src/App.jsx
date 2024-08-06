import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import Input from './Input';
import Filter from './Filter';
import Card from './Card';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (name, description) => {
    const newTask = { id: Date.now(), name, description, status: 'Not Completed' };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.status === filter);

  return (
    <>
      <h1 className='text-center bg-primary text-light p-4'>MY TODO</h1>
      <div className='container'>
        <Input addTask={addTask} />
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <div className="row">
          {filteredTasks.map(task => (
            <Card key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;