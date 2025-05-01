import { Children } from 'react';
import './App.css';
import {range} from 'd3'
import Face from './Components/Face';
const width = 170;
const height = 170;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 30;
const eyeOffsetY = 30;
const eyeRadius = 10;
const mouthRadius = 40;

const faces=range(5);

const App=() => faces.map(()=>( <Face 
  width={width}
  height={height}
  centerX={centerX}
  centerY={centerY}
  strokeWidth={strokeWidth}
  eyeOffsetX={eyeOffsetX}
  eyeOffsetY={eyeOffsetY}
  eyeRadius={eyeRadius}
  mouthRadius={mouthRadius}
  />
));

export default App;
