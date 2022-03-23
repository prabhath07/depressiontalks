import React from 'react'
import Appmain from './Appmain'
import {BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Quizapp from './components/Questioners/Quizapp';
import FileUploadApp from './components/FileUpload/FileUploadApp';

function App() {
  return (
    <Router>
  <Routes>
  <Route exact path = '/' element = {<Appmain/>}/>
  <Route path ='/questions' element ={<Quizapp/>}/>
  <Route path ='/file-upload' element ={<FileUploadApp/>}/>

  </Routes>
</Router>
  )
}

export default App