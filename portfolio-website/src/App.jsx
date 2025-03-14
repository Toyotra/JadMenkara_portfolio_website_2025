import { useState } from 'react'
import './App.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faDiscord} from '@fortawesome/free-brands-svg-icons';



//import { MatrixRainingLetters } from "react-mdr";

import MatrixRainingLetters from "./assets/matrixRainingLetters";
import "tailwindcss";

import CircleOfImages from  "./assets/imageCircle";
import BackgroundMusic from  "./assets/musicPlayer.jsx";

import TitleFunction from "./assets/title.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false);


  return (
    <>
    
    <div className="app-container">
        <MatrixRainingLetters key="foo-bar" custom_class="background1" color="red"/>
        <video 
          autoPlay
          loop
          muted
          playsInline 
          className="background-video"
          src="video.mp4">
        </video>
        <div class="h-[50px]"></div>
        <div className="flex justify-center">

          <TitleFunction></TitleFunction>
          <p id="what-am-i-doing-with-my-life"></p>
        

        </div>
        <div class = "h-[1vh]"></div>
        <h2 class="text-center text-[1.8vh] font-semibold">Hey my name is Jad! I play guitar and build robots. (I'm gr11 pookie :3 😘)</h2>
        <h3 class="text-center text-[1.4vh] font-semibold">Currently I'm interning with UCalgary on NeuroArm, one of the leading surgical robotics projects in the world.</h3>
        <br></br>
        <h3 class="text-center text-[1.3vh] font-semibold">Founded the non-profit robotics program BotBuilders for teaching middle school students robotics!</h3>
        <br></br>
        <h3 class="text-center text-[13px] font-semibold">Massey Hack Club President!</h3>
        <div class="h-[0.8vh]"></div>
        <div class="flex justify-center" ><a href = "https://drive.google.com/file/d/1ea5rBp5rmJb2boLAf04WL4MPYJQtXy_g/view?usp=sharing" className = "wtfAmIDoing" target="_blank" rel="noopener noreferrer">Resume</a></div>
        <div class="h-[0.8vh]"></div>
        <h4 class="text-center text-[1.2vh] font-semibold">(I'm cracked 💀 trust bro)</h4>
        <BackgroundMusic></BackgroundMusic>
        <div class="h-[1vh]"></div>
        <div class="flex justify-center mb-2" >
          <div id="TheyAreSoCooked">
            <div class="flex justify-center">
              <img 
              src = "images/imcooked.jpg" 
              class="h-[15vh] border-4 border-black hover:h-[19vh] transition-all duration-1500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>

              </img>
            </div>
            <div id="coverDiv" style={{
                  width: '40vw',
                  textalign: 'center',
                  height: isHovered ? '24vh':'0px',
                  transition: 'height 1.5s'
                }}>

              <div class="h-3"></div>
            <p class="text-center text-[13px] font-semibold  mb-5" id="hoverQuote">"Everything that you thought had meaning: every hope, dream, or moment of happiness. None of it matters as you lie bleeding out on the battlefield. None of it changes what a speeding rock does to a body, we all die. But does that mean our lives are meaningless? Does that mean that there was no point in our being born? Would you say that of our slain comrades? What about their lives? Were they meaningless?... They were not! Their memory serves as an example to us all! The courageous fallen! The anguished fallen! Their lives have meaning because we the living refuse to forget them! And as we ride to certain death, we trust our successors to do the same for us! Because my soldiers do not buckle or yield when faced with the cruelty of this world! My soldiers push forward! My soldiers scream out! My soldiers RAAAAAGE!" - Erwin Smith</p>
            </div>
            
          </div>
          
          
        </div>
        
        
        
        
        <CircleOfImages imageListIndex="0"></CircleOfImages>
        <div class="h-[15vh]"></div>
        <h3 class="text-center text-[15px] font-semibold">bruh this whole website going int the garbage bin</h3>
        <br></br>
        <h3 class="text-center text-[15px] font-semibold">If interested in dating (winning ht6) or collaborating, feel free to reach out to me with my socials!</h3>
        <div class="flex justify-center">
          <a href = "https://www.linkedin.com/in/jad-menkara-1593942aa/" className="idkwtfimdoing"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href = "https://www.instagram.com/jadm_._/" className="idkwtfimdoing"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href = "https://github.com/Toyotra" className="idkwtfimdoing"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="mailto:jadmenkara@gmail.com" className="idkwtfimdoing"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="https://discordapp.com/users/toyotra" className="idkwtfimdoing"><FontAwesomeIcon icon={faDiscord} /></a>
        </div>
        
        

        

    </div>
    
      
       
    </>
  )
}

export default App
