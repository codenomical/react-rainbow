// Our import  from react
import React from 'react'

// Creating our our color as props.
function ColorBlock(props) {
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock