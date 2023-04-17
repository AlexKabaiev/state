import React from "react";
// import Counter from './components/Counter';
// import Dropdown from "components/Dropdown";
import ColorPicker from "components/ColorPicker";


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D63' },
  { label: 'indigo', color: '#3F51B5' },
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