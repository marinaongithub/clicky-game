import MemoryCard from "../memoryCard/MemoryCard.js";
import memoryCards from "./memoryCards.json";
import React, {useState} from 'react'
import "./cardsGallery.css";

function CardsGallery() {

  let imgUrl =  [
    "images/avatar1.png",
    "images/avatar2.png",
    "images/avatar3.png",
    "images/avatar4.png",
    "images/avatar5.png",
    "images/avatar6.png",
  ]

  const [imgOrder, setImgOrder] = useState(imgUrl);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      }
      return array;
    }

  const handleCardClick = (e) => {

    if (e.target.matches("img")) {
      imgUrl = shuffleArray(imgUrl);  
      setImgOrder(imgUrl);
      console.log(imgOrder)
    }
  }


  return (
    <div className="cards-gallery" onClick={handleCardClick}>

    {
      imgOrder.map(item => (
          <MemoryCard imgUrl={item}/>
          )
        )
    }
    </div>
  )
}

export default CardsGallery