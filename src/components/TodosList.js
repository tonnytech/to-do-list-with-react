/* eslint-disable */

const TodosList = ({ todosProps, setTodos}) => {
  
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
    
  return (
    <ul>
      {todosProps.map((todo) => (
        <li>
          <input type="checkbox" checked = {todo.completed} onChange={() => handleChange(todo.id)} />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
export default TodosList;
