import React, { useState } from 'react'

function ColorForm(props){
    // allows for input and setInput, will reset the input with ('').
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal e.preventDefault ()
        // addColor, the function we just built, should be available within props.
        props.addColor(input)
    }
    // our submission form.
    return (
       <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit!</button>
            </form>
       </div> 
    )
}

// our export
export default ColorForm