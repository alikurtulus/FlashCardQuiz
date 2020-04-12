import React,{useState} from 'react'

const FlashCard = ({flashcard}) => {
    const [flip, setFlip] = useState(false)
    return (
        <div 
            className={`card ${flip ? 'flip': ''}`}
            onClick = {() => setFlip(!flip)}
        >
            <div className='front'>
                {flashcard.question}
                <div className='flashcard-options'>
                  {flashcard.options.map(option => {
                    return  <div className='flashcard-option'>
                              {option}
                            </div>
                  })}
                </div>
            </div>
            <div className='back'>
            {flip ? flashcard.answer : <h3>{flashcard.question}</h3>}
            </div>
        </div>
    )
}
export default FlashCard