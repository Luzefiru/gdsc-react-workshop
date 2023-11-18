import './App.css';
import Greeting from './components/Greeting';
import TodoCard from './components/TodoCard';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';

import { useState } from 'react';

// const todos = [
//   { id: 1, description: 'Study DSA', dueDate: '11/19/23' },
//   { id: 2, description: 'Study DSA', dueDate: '11/19/23' },
//   { description: `Cry after failing DSA`, dueDate: '11/19/23' },
// ];

// CRUD => Create, Read, Update, Delete

function App() {
  const currentUser = { name: 'Clive Lim', age: 69 };

  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const [idToUpdate, setIdToUpdate] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  // Todo Item CRUD Functions
  const createTodo = (description, dueDate) => {
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 10000000), description, dueDate },
    ]);
    setDescription('');
    setDueDate('');
  };

  const deleteTodo = (idToDelete) => {
    setTodos(todos.filter((t) => t.id !== idToDelete));
  };

  const updateTodo = () => {
    const updatedTodo = {
      id: idToUpdate,
      description: newDescription,
      dueDate: newDueDate,
    };

    setTodos([
      ...todos.filter((t) => t.id !== Number(idToUpdate)),
      updatedTodo,
    ]);
  };

  // Input & Form Handlers
  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    createTodo(description, dueDate);
  };

  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <div className="forms-container">
        <CreateForm
          description={description}
          setDescription={setDescription}
          dueDate={dueDate}
          setDueDate={setDueDate}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <UpdateForm
          idToUpdate={idToUpdate}
          setIdToUpdate={setIdToUpdate}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          newDueDate={newDueDate}
          setNewDueDate={setNewDueDate}
          handleChange={handleChange}
          updateTodo={updateTodo}
        />
      </div>

      <Greeting currentUser={currentUser} something="hi" />

      <ul className="todo-container">
        {todos.map((t) => (
          <TodoCard
            id={t.id}
            description={t.description}
            dueDate={t.dueDate}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
