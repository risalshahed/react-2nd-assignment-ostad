import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useAddTodo() {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = setTodos => {
    if (newTodo.trim() === '') return; // Don't add empty todos
    const uniqueId = uuidv4(); // Generate a unique ID using uuid
    const todoItem = { id: uniqueId, title: newTodo, completed: false };
    setTodos(prevTodos => [todoItem, ...prevTodos]);
    setNewTodo(''); // Clear the input field after adding the todo.
  };

  const handleInputChange = e => {
    setNewTodo(e.target.value);
  };

  return { newTodo, handleAddTodo, handleInputChange };
}