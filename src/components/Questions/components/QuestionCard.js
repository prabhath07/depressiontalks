import React, { useState } from 'react'
import styled from 'styled-components'
import { randQustions } from '../lib/quiz'
import ShowMessage from './PageElements/ShowMessage';
import { Box, Button } from './PageElements/UIElements';
import ShowConfetti from './ShowConfetti';
import {Link} from 'react-router-dom'
import './c2.css';
import axios from 'axios';
const BasicGrid = styled.div`
   display: grid;
   gap: 1rem;
   margin: 1rem 0;
`
const QuestionCard = () => {
   const [result,setresult]=useState('');

    const refreshPage = () => window.location.reload();
   const [currentIndex, setCurrentIndex] = useState(0)
   const [endQuiz, setEndQuiz] = useState(false)
   const [score, setScore] = useState(0);
   const [avg, setAvg] = useState(0);
   const [showAns, setShowAns] = useState(false);

   //function to calc score and show correct answer
   const handleAnswerClick = (isCorrect, e) => {
      // setShowAns(true)
      if (isCorrect) {
         setScore((prev) => prev + isCorrect);
      }
      setTimeout(() => {
         nextQuestion()
      }, 10)
   }

   //function to go to next question if within bounds of quiz length and hide correct answer 
   // if ouside the bounds of the quiz array, the quiz will end
   const nextQuestion = () => {
      setShowAns(false)
      if (currentIndex === randQustions.length - 1) {
         endOfQuiz()
      }
      else {
         setCurrentIndex(prev => prev + 1);
      }
   }

   //function to pre-emptively end quiz
   const seeResults = () => {
      setEndQuiz(true)
      setAvg((score / currentIndex) * 100)
   }

   const endOfQuiz = () => {
      setEndQuiz(true)
      setCurrentIndex(prev => prev + 1)
      setAvg((score / currentIndex) * 100)
   }

   //function to result all variables 
   const reset = () => {
      setEndQuiz(false);
      setCurrentIndex(0);
      setScore(0)
      setShowAns(false)
   }
   if (endQuiz) {
      axios({
        url:'http://65.2.40.31:5000/questions/score',
        method: "POST",
        headers: {
                'Access-Control-Allow-Origin':'http://localhost:3001',
                'Content-Type': 'application/json'
        },
        data: {
            score:score,
            name:'prabhath'
            }
            
        })
            .then(res => {
                setresult(res.data.success);
               console.log(res.data.success);
            })
            .catch(err => console.error(err))

    
      return (
         // <div className='app'>
         <>
 {avg >= 80 &&
               <ShowConfetti whenToShow={endQuiz} />
            }
            <Box >
               <div className="spacer"></div>
               <div className="top" style={{ textAlign: 'center' }}>
                  <ShowMessage avg={avg} />
                  <p>you scored <strong>{score}</strong></p>
               </div>
               
            <a href={result} target="_blank"><Button className='startover'  onClick={reset} >Report</Button></a>  
            {/* <Link to = '/'><Button className='startover'  onClick={reset} >Report</Button></Link> */}
               
               
            </Box>
            </>
           
      )
   }

   return (
      
      // <div className='app3'>
      <Box className='question-box m-full-y' >
            <div className="top">
               {/* <h6 className='top-text'>question {currentIndex + 1} of {randQustions.length}</h6> */}
               {/* <div className="question">
                  <h2 className='question-text'>{randQustions[currentIndex].question}</h2>
               </div> */}
            </div>

            <BasicGrid className="answers-row middle">
            <div className="question">
                  <h2 className='question-text'>Choose one of the following : </h2>
               </div>
               {randQustions[currentIndex].answers.map((answer, key) => (
                  <Button
                     className={showAns && answer.score ? 'ans' : ''}
                     onClick={(e) => { handleAnswerClick(answer.score, e) }}
                     key={key}
                     id='ans'
                     disabled={showAns}
                  >
                     {answer.answerText}
                  </Button>
               ))}
            </BasicGrid>

            <div className="bottom">               
               <Button
                  className='secondary'
                  onClick={seeResults}
                  disabled={showAns || currentIndex === 0}>
                  Submit
               </Button>
            </div>
         </Box>

      
      // </div>
        
      
   )
}

export default QuestionCard


