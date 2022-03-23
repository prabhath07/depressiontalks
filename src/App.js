import React from 'react'
import Appmain from './Appmain'
import {BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Home from './components/Questions/components/Home';
import FileUploadApp from './components/FileUpload/FileUploadApp';

function App() {
  return (
    <Router>
  <Routes>
  <Route exact path = '/' element = {<Appmain/>}/>
  <Route path ='/questions' element ={<Home/>}/>
  <Route path ='/file-upload' element ={<FileUploadApp/>}/>

  </Routes>
</Router>
  )
}

export default App