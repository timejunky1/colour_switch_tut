import { useState } from 'react';
import Colour from './Colour';
import ColourSet from './ColourSet';

function App() {
  const [colour, setColour] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className='App'>
      <Colour
        hexValue = {hexValue}
        colour = {colour}
        isDarkText = {isDarkText}
      />
      <ColourSet
        colour={colour}
        setColour = {setColour}
        setHexValue = {setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}

      />
    </div>
  );
}

export default App;
