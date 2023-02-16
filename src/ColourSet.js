import React from 'react'
import colorNames from 'colornames'

const ColourSet = ({colour, setColour, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form className='colourSwitch' onSubmit={(e) => e.preventDefault}>
        <input
            id='colourName'
            type="text"
            role='collourChange'
            placeholder='Add color name'
            value={colour} 
            autoFocus
            onChange={(e) => {
                setColour(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
        <hr/>
        <button 
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Colour
        </button>
    </form>
  )
}

export default ColourSet