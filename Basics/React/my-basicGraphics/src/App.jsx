import './App.css';
import { arc } from 'd3-shape';

const width = 900;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 30;

const mouthArc = arc()
  .innerRadius(90)
  .outerRadius(100)
  .startAngle(Math.PI/2)
  .endAngle(Math.PI * 1.5);

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <path d={mouthArc()} />
      </g>
    </svg>
  );
}

export default App;
