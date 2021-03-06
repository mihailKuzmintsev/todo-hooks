import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function TodoForm({ id, task, editTodo, toggleEdit }) {
  const [value, handleChage, reset] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEdit();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        value={value}
        onChange={handleChage}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default TodoForm;
