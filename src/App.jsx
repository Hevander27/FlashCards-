import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import HomeScreen from './components/HomeScreen'
import plantData from './data/plantData'

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  
  const totalCards = plantData.length
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }
  
  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * plantData.length)
    setCurrentCardIndex(randomIndex)
    setIsFlipped(false)
  }
  
  const startGame = () => {
    setGameStarted(true)
  }

  return (
    <div className="App">
      {!gameStarted ? (
        <HomeScreen startGame={startGame} />
      ) : (
        <>
          <div className="header">
            <h1>The Ultimate Plant Parent!</h1>
            <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
            <p>Number of cards: {totalCards}</p>
          </div>
          
          <div className="card-container">
            <Card 
              question={plantData[currentCardIndex].question} 
              answer={plantData[currentCardIndex].answer}
              isFlipped={isFlipped}
              handleCardClick={handleCardClick}
            />
          </div>
          
          <div className="navigation">
            <button className="next-button" onClick={getRandomCard}>→</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App