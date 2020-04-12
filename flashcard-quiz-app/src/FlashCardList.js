import React from 'react'
import FlashCard from './FlashCard'

const FlashCardList = ({flashCards}) => {
    return (
        <div className="card-grid">
            {flashCards.map(flashcard => {
                return <FlashCard key={flashcard.id} flashcard={flashcard} />
            })}
        </div>
    )
}
export default FlashCardList