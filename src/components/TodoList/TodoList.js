import React from 'react';
import './TodoList.css';

// const TodoList = ({ todos }) => (
//   <ul>
//     {todos.map(todo => (
//       <li key={todo.id}>
//         <p>{todo.text}</p>
//       </li>
//     ))}
//   </ul>
// );

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li
        key={id}
        className="
TodoList__item"
      >
        <p
          className="
TodoList__text"
        >
          {text}
        </p>
        <button onClick={() => onDeleteTodo(id)}>удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
