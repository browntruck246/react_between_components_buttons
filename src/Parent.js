import React, { useState } from 'react';
import Child from './Child'; // Import the Child component

// Parent Component
const Parent = () => {
  const [value, setValue] = useState(''); // State in the parent

  const handleButtonClick = (newValue) => {
    setValue(newValue); // Update state on button click
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => handleButtonClick('John')}>John</button>
      <button onClick={() => handleButtonClick('Tom')}>Tom</button>
      <Child value={value} /> {/* Pass state as a prop to the child */}
    </div>
  );
};

export default Parent;