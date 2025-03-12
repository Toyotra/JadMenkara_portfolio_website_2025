import React from 'react';
import './circle.css';
import "tailwindcss";
const imagesList = [
    ["0.JPG",
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.png",
    "5.jpeg",
    "6.jpg"]
];

const CircleOfImages = ({imageListIndex}) => {
  return (
    <div className="circle-container">
      <div className="circle">
        {imagesList[imageListIndex].map((image, index) => (
          <div
            key={index}
            className="circle-image"
            style={{
              transform: `rotateY(${(360 / imagesList[imageListIndex].length) * index}deg) translateZ(250px)`, // Adjust translateZ for proper depth
            }}
          >
            <img src={`images/${image}`} alt={`image-${index}`} class="border-4 border-black"/>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default CircleOfImages;