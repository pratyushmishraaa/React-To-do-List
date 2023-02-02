
import React, { useState } from 'react';
import "./App.css"

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput('');
  };

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='cont'>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={event => setInput(event.target.value)} placeholder="Add Your Task" />
        <button type="submit"><i class="fa fa-check fa-2x" aria-hidden="true"></i></button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button id='btn-del' onClick={() => deleteTask(index)}><i class="fa-solid fa-trash-can fa-2x"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

