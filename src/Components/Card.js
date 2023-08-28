import React from 'react'
import './Cards.css'
import { useState } from 'react'

function Card(props) {
    const [moreInfo, setMoreInfo] =useState(false)

function handleClick() {
    setMoreInfo(toggle => !toggle)
}

  return (
    <div className='card-wrapper'>
        <div className='card-details-title'>
            {props.card? <h2>CARD DETAILS</h2> : <p>"loading"</p>}
        </div>
        <div className='card-details-main'>
            <div className='card-details-left'>
                {props.card? <img src="./jinzo.jpg" alt="jinzo"/> : <p>loading</p>}
                
            </div>
            <div className='card-details-right'>
                {props.card? <p><span className='card-text'>Name:</span> {props.card.data[0].name}</p> : <p>"loading"</p>}
                {props.card? <p><span className='card-text'>Attribute:</span> {props.card.data[0].attribute}</p>: <p>loading</p>}
                {props.card? <p><span className='card-text'> Type: </span>{props.card.data[0].type}</p>: <p>loading</p>}
                {props.card? <p><i class="fa-solid fa-star"></i>: {props.card.data[0].level}</p>: <p>loading</p> }
                {props.card? <p><i class="fa-solid fa-khanda"></i>: {props.card.data[0].atk}</p> : <p>loading</p>}
                {props.card? <p><i class="fa-solid fa-shield"></i>: {props.card.data[0].def}</p> : <p>loading</p>}
                {props.card? <p><span className='card-text'>Description: </span> {props.card.data[0].desc}</p>: <p>loading</p>}
<div className='button-div'>
                <button id="moreInfo" onClick={handleClick} >{moreInfo? "Show less": "More info"}</button>
               </div> <p>{moreInfo ? "Id: " + props.card.data[0].id: ""}</p>
                <p>{moreInfo ? "Category: " + props.card.data[0].race: ""}</p>
                {/* <p>{moreInfo ? "Banlist: " + props.card.data[0].banlist_info.ban_goat: ""}</p> */}
            </div>
        </div>
    </div>
  )
}

export default Card

// {<img
//     src={props.card.data[0].card_images[0].image_url}
//     alt={props.card.data[0].name}
//   /> }

// className={moreInfo ? "close": "open"}