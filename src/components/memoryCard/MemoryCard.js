import React from 'react'
import "./memoryCard.css"


function memoryCard(props) {
  return (
    <div className="memoryCard">
        <img src={props.imgUrl} alt={props.altText}/>
    </div>
  )
}

export default memoryCard