import React from "react";
// import Counter from './components/Counter/Counter';
// import Dropdown from "components/Dropdown/Dropdown";
import ColorPicker from "components/ColorPicker/ColorPicker";


const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d8b' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5' },
];

const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>
      {/* <Counter initialValue={10} /> */}
      {/* <Dropdown /> */}
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};

export default App;