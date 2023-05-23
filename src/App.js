import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  // Static Data
  let [colors, setColors] = useState ([
    'violet', 'blue', 
    'lightblue', 'green', 
    'greenyellow', 'yellow', 
    'orange', 'red'
  ]);

  // Adding key= to fix warning about 'each child in a list should have a unique "key" prop'
  let colorMap = colors.map((color, i) => {
      return (
          <ColorBlock key={i} color={color} />
       )
  });

  // adds new color and selects color with new color from setColors.
  const addColor = (newColor) => {
      setColors([...colors, newColor])
  }

  return (
    <div className="App">
        {colorMap}

        <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
