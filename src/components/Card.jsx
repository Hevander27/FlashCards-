import { useState } from 'react'
import './Card.css'

const Card = ({ question, answer, isFlipped, handleCardClick }) => {
  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleCardClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <p>{question}</p>
        </div>
        <div className="card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Card