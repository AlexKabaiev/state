import React, { Component } from "react";
// import Counter from './components/Counter';
// import Dropdown from "components/Dropdown";
// import ColorPicker from "components/ColorPicker";
import TodoList from "components/TodoList";
import initialTodos from './components/TodoList/todos.json';


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} />
      </>
    );
  }
};

export default App;