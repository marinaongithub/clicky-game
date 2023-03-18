import React from 'react'
import "./memoryCard.css"


function memoryCard(props) {
  return (
    <button className="memoryCard">
        <img src={props.imgUrl} alt={props.altText}/>
    </button>
  )
}

export default memoryCard