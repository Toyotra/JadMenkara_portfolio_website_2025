import { useEffect, useRef, useState } from "react";
import React from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);


  const musicFiles = [
    "a bulleT w my namE On.mp3",
    "AOT The Rumbling (hardstyle).mp3",
    "MUKANJYO.mp3",
    "Translucent.mp3"
  ];

  const [updateFlag, setUpdateFlag] = useState(false);

  const [currentSong, setCurrentSong] = useState("");

  const changeSong = (song) =>{
    setCurrentSong(song);
    setUpdateFlag(prev => !prev);
  } 


  useEffect(() => {
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play().catch((e) => console.log("Autoplay blocked"));
      }
    },
      [currentSong]);

  useEffect(() => {
    
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => console.log("Autoplay blocked"));
      }
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => document.removeEventListener("click", playAudio);
  }, []);

  console.log(currentSong);
  return (
        <div class="w-full">
            <audio ref={audioRef} loop src={"Music/"+currentSong} type="audio/mpeg">
            </audio>
            <div class="flex flex-col justify-center w-full items-center    ">
            

            <button  className = "cringe" onClick={() => changeSong("a bulleT w my namE On.mp3")}>a bulleT w my namE On.mp3</button>
            <button  className = "cringe" onClick={() => changeSong("AOT The Rumbling (hardstyle).mp3")}>AOT The Rumbling (hardstyle).mp3</button>
            <button  className = "cringe" onClick={() => changeSong("MUKANJYO.mp3")}>MUKANJYO.mp3</button>
            <button className = "cringe" onClick={() => changeSong("Translucent.mp3")}>Translucent.mp3</button>
            <p class="flex">Currently playing:&nbsp; <p class="text-blue-500 font-bold"> {currentSong}</p></p>
        </div>
        </div>
        
        
  );
}