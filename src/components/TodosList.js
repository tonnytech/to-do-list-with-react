/* eslint-disable */

import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

const TodosList = ({ todosProps, setTodos, setUpdate}) => {
  const [editing, setEditing] = useState(false);
  
  const handleEditing = () => {
    setEditing(true);
  };

  const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  };

  const delTodo = (id) => {
    setTodos ([
      ...todosProps.filter( (todo)=> {
        return todo.id !== id;
      })
    ]);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
    
  return (
    <ul>
      {todosProps.map((todo) => (
        <li className={styles.item}>
          <div className={styles.content} style={viewMode}>
            <input type="checkbox" checked = {todo.completed} onChange={() => handleChange(todo.id)} />
            <button onClick={handleEditing}>Edit</button>
            <button onClick={() => delTodo(todo.id)}> Delete</button>
            <span style={todo.completed ? completedStyle : null}>
            {todo.title}
            </span>
          </div>
          <input
      type="text"
      value={todo.title}
      className={styles.textInput}
      style={editMode}
      onKeyDown={handleUpdatedDone}
      onChange={(e) => setUpdate(e.target.value, todo.id)}
    />
        </li>
      ))}
    </ul>
  );
};
export default TodosList;
