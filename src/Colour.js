import React from 'react'

const Colour = ({hexValue, colour, isDarkText}) => {
  return (
    <div id="colour" 
        style={{
            backgroundColor: colour,
            color: isDarkText? "#000": "#FFF"
        }}
        >
        <p>{(colour)? colour: "Empty Value"}</p>
        <p>{(hexValue)? hexValue: null}</p>
        
    </div>
  )
}

export default Colour