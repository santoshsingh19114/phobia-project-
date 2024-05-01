import React from 'react'
import png from "./png.png"
import { TbMessageChatbot } from "react-icons/tb";
import "./Banner.css"

import Typed from 'typed.js';
import { useRef ,useEffect} from 'react';

const Banner = () => {
    const element=useRef(null);
  //  useEffect(()=>{
  //   const typed=new Typed(element.current,{
  //       strings:["FEAR","PHOBIA", "STRESS"],
  //       startDelay:500,
  //       typespeed:1,
        
  //       smartBackspace:true,
  //       showCursor:false,
  //       loop:true,
  //     });
          
  //  });
  return (
    <div>
        <div className='section1'>
        <div className='section1-left'>
            <h1 className='title'>Face your fear not just avoid them we will guide you <br/>through VR</h1>
            
            <h1 className='chatbot-heading'>Try chatbot here</h1>
            <span><button className="bot-button"><a href="https://app.droxy.ai/guest-chatbot/6628a7838ccd6a4054250a8a"><TbMessageChatbot className='chatbot' /></a></button></span>

           {/* <h3>It-s all about <span ref={element}></span></h3>  */}

        </div>
        <div className='section1-right'>
            <img src={png} alt=""  ></img>
        </div>
        </div>
    </div> 
  )
}

export default Banner
