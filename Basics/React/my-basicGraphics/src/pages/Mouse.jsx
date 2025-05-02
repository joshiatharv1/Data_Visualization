import React, {useState} from 'react'
const width = 960
const height = 500
const circleRadius=30
const initalMousePosition={x:width/2,y:height}


const Mouse = () =>{ 
    const [mousePosition, setMousePosition] = useState(initalMousePosition)
    const handleMouseMove = (event) => {
        setMousePosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
      };
      
    return  (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
    <circle
    cx={mousePosition.x}
    cy={mousePosition.y}
    r={circleRadius}
    />
    </svg>
  )
}

export default Mouse
