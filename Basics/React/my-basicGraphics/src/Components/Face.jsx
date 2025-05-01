import React from 'react'
import FaceContainer from './FaceContainer'
import BackgroundCircle from './BackgroundCircle'
import Eyes from './Eyes'
import Mouth from './Mouth'

const Face = ({width, height, centerX, centerY, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthRadius}) => 
  (
    <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>    
        <BackgroundCircle radius={centerY - strokeWidth/2} strokeWidth={strokeWidth}/>
        <Eyes eyeRadius={eyeRadius} eyeOffsetY={eyeOffsetY} eyeOffsetX={eyeOffsetX} />
        <Mouth mouthRadius={mouthRadius}/>
      </FaceContainer> 
  )


export default Face
