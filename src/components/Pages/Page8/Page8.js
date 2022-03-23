import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './Page8.module.css';
import {TimelineLite} from 'gsap';
import {Link} from "react-router-dom";

class Page8 extends React.Component{

    constructor(props){
        super(props);
        this.headingElement=null;
        this.para1=null;
        this.para2=null;

 this.paraElement=null;
        this.page6PageTween = new TimelineLite({paused:true});;
       
    }
    state={
        displayStyle:null
    }

    componentDidMount=()=>{
    
        this.props.allowAnimation();
        this.entryEventHandler();
        
    }
    entryEventHandler=()=>{
      
        this.page6PageTween
        .delay(0.5)
        .fromTo(this.headingElement,1.5,{opacity:0,y: -10},{opacity:1,y:0})

        .fromTo(this.para1,0.75,{opacity:0,y: -10},{opacity:1,y:0,delay:0.5})
        .fromTo(this.para2,0.75,{opacity:0},{opacity:1,delay:0.5})

       .play();
       this.page6PageTween.eventCallback("onComplete",this.props.allowScrollEvent);
       
    }

    componentDidUpdate=(prevProps)=>{
        if(this.props.stopAnimation!==prevProps.stopAnimation && this.props.stopAnimation){
          
            this.page6PageTween.progress(1,false);
        }
    }

   

    render(){
        return(
        <div id="page8" className={classes.page8Container}>
       
        <div  ref={div => this.headingElement = div} className={classes.headingContainer}>
            <MainHeading color="#0f222a" className={classes.mainHeading}>Take a test

</MainHeading>
      
    </div>
    <div ref={div => this.para1 = div} className={classes.paragraph}>
        <p></p>
    </div>
    <div ref={div => this.para2 = div}>
        <Link to = '/questions'>
        <button className={classes.button} ><span>Questionnaire</span></button>
        </Link>
        <Link to = '/file-upload'>
        <button className={classes.button} ><span>Upload MRI Scans</span></button>
        </Link>
    </div>
    </div>
   
   
  
    )
       
    }
}

export default Page8;