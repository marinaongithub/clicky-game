import MemoryCard from "../memoryCard/MemoryCard.js";
import memoryCards from "./memoryCards.json";
import "./cardsGallery.css";

import React from 'react'

function cardsGallery() {
  return (
    <div className="cards-gallery">
      {
      memoryCards.map(memoryCard => (
        <MemoryCard imgUrl={memoryCard.imgUrl} altText={memoryCard.altText}/>
        )
      )
    }
      </div>
  )
}

export default cardsGallery