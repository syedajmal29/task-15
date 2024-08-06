import React, { useState } from 'react';

const Card = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editTask(task.id, { ...task, name, description, status });
    setIsEditing(false);
  };

  return (
    <div className="col col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className='container my-4 bg-primary text-light p-4 card d-flex justify-content-center'>
        {isEditing ? (
          <>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="form-control mb-2"
            />
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="form-control mb-2"
            />
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
              className="form-control mb-2 text-dark"
            >
              <option>Completed</option>
              <option>Not Completed</option>
            </select>
            <button className='btn btn-success m-2' onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {task.name}</p>
            <p>Description: {task.description}</p>
            <div className="filter">
              <span className='h6'>Status: </span>
              <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)} 
                className="p-1 text-dark"
                disabled
              >
                <option>Completed</option>
                <option>Not Completed</option>
              </select>
            </div>
            <div className="button text-end mt-4">
              <button className='btn btn-warning m-2' onClick={handleEdit}>Edit</button>
              <button className='btn btn-dark m-2' onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;