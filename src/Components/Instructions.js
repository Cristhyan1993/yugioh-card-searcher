import React from 'react'
import "./instructions.css"

function Instructions() {
  return (
    <div className='instructions-wrapper'>
        <h2>How to use the searcher</h2>
        <p>Type in the <span className='important'>EXACT</span> name of the card you want to search e.g "Blue-eyes white dragon". It can be any monster, magic or trap card and you will get the card information below.</p>
        <p><span className='important'>PLEASE NOTE</span> the searcher is NOT case sensitve however the correct spelling of the card is required including special characters e.g "#, -"</p>
        <p><span className='important'>IMAGES</span> do not update due to the instructions of the API used</p>
    </div>
  )
}

export default Instructions