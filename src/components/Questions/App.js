import './App.css';
import QuestionCard from './components/QuestionCard';
import { MainApp } from './components/PageElements/MainApp';
import { theme } from './data/AppTheme'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Home from './components/Home';

import MainHome from './components/MainHome';


function App() {
  return (
<Router>
  <Routes>
  <Route  path = '/MainHome' element = {<Home/>}/>
  <Route path ='/' element ={<MainHome/>}/>
  <Route path ='/questions' element ={<Home/>}/>


  </Routes>
</Router>
  
  
  );
}

export default App;
