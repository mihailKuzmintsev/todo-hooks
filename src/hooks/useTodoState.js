import { useState } from 'react';
import uuid from 'uuid/v4';

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: value => {
      setTodos([...todos, { id: uuid(), task: value, completed: false }]);
    },

    removeTodo: todoId => {
      const newTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(newTodos);
    },

    toggleTodo: todoId => {
      const newTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    },

    editTodo: (todoId, newTask) => {
      const newTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(newTodos);
    },
  };
};
