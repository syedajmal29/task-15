import React, { useState } from 'react';

const Input = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name, description);
    setName('');
    setDescription('');
  };

  return (
    <div className='text-center m-4'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Todo Name' 
          className="p-2 m-2" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type='text' 
          placeholder='Todo Description' 
          className="p-2 m-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type='submit' 
          className="p-2 m-4 button btn btn-warning" 
          value={"AddTodo"} 
        />
      </form>
    </div>
  );
};

export default Input;