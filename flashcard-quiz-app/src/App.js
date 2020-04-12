import React, {useState, useEffect} from 'react';
import FlashCardList from './FlashCardList'
import './app.css'
import axios from 'axios'
function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_FLASHCARDS)

  useEffect(() => {
        
    axios
        .get(`https://opentdb.com/api.php?amount=10`)
        .then(res => {
          setFlashCards(res.data.results.map((questionItem,index) => {
            const answer = questionItem.correct_answer
            let options = [...questionItem.incorrect_answers.map( a => decodeString(a))
              ,answer ]
           
            return {
              id:`${index}-${Date.now()}`,
              question:  decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - .5)


            }
          }))  
        })

  }, [])

  const decodeString =(str) => {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value

  }
  return (
    <div className="container">
       <FlashCardList flashCards={flashCards}/>
    </div>
  );
}
const SAMPLE_FLASHCARDS = [
  {
    id:1,
    question:"What's 2 + 2?",
    answer:'4',
    options:[
      "2",
      "3",
      "4",
      "5"
        
    ]

  },
  {
    id:2,
    question:"Question 2 ?",
    answer:'Answer',
    options:[
      "Answer",
      "Answer 2",
      "Answer 3",
      "Answer 4"
        
    ]

  }
  
]
export default App;
