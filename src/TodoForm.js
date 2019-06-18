import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function TodoForm({ addTodo }) {
  const [value, handleChage, reset] = useInputState('');

  return (
    <Paper>
      {value}
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChage} />
      </form>
    </Paper>
  );
}

export default TodoForm;
