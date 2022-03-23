import React from 'react'
import '../App.css';
import './components.css';
import QuestionCard from './QuestionCard';
import { MainApp } from './PageElements/MainApp';
import { theme } from '../data/AppTheme';
import {Link} from 'react-router-dom';
import { Box, Button } from './PageElements/UIElements';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.surface1};
    color: ${({ theme }) => theme.text1};
    font-size: clamp(1rem, 8vw, 1.3rem);
    > * {
      transition: 0.25s ease all;
    }
  }
  h1{
    font-size: clamp(1.2rem, 8vw, 2.8rem);
  }
`
function MainHome() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="app2">
        <div className='title'>
        <h1>Depression Something ....</h1>

        <h1>
            <Button className='secondary'>See More</Button> 
        </h1>

        </div>
 <div className='s2'>

        <div className='upload'>
        <Link to ='/image'>
             <h1 className='link'>Image Report</h1>
             <div className='imscan'>
              
             </div>
             </Link>
             
           
                   
        </div>

        <div className='questions'>
            <Link to = '/questions'>
            <h1 className='link'>Questioniare</h1>
            </Link>
        


        </div>
        </div>



    </div>





  </ThemeProvider>
  );
}

export default MainHome ;