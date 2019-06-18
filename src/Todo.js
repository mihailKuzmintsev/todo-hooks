import React from 'react';
import TodoEditForm from './TodoEditForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ListItemSecondaryAction } from '@material-ui/core';
import useToggleState from './hooks/useToggleState';

function Todo({ todo, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggleEdit] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <TodoEditForm
          editTodo={editTodo}
          id={todo.id}
          task={todo.task}
          toggleEdit={toggleEdit}
        />
      ) : (
        <>
          <CheckBox
            tabIndex={-1}
            checked={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
          <ListItemText
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => toggleEdit()}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
