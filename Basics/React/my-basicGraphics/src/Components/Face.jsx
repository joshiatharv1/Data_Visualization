import React from 'react'
import FaceContainer from './FaceContainer'
import BackgroundCircle from './BackgroundCircle'
import Eyes from './Eyes'
import Mouth from './Mouth'
const width = 170;
const height = 170;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 30;
const eyeOffsetY = 30;
const eyeRadius = 10;
const mouthRadius = 40;


const Face = () => 
  (
    <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>    
        <BackgroundCircle radius={centerY - strokeWidth/2} strokeWidth={strokeWidth}/>
        <Eyes eyeRadius={eyeRadius} eyeOffsetY={eyeOffsetY} eyeOffsetX={eyeOffsetX} />
        <Mouth mouthRadius={mouthRadius}/>
      </FaceContainer> 
  )


export default Face
