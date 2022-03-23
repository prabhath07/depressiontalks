import React, { useState } from 'react'
import './app2.css'
import Start from './Start'
import Quiz from './Quiz'

function Quizapp() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default Quizapp;
