import './App.css'
const width=900;
const height=500;
const centerX=width/2;
const centerY=height/2;
const strokeWidth=10;
const eyeOffsetX=90;
const eyeOffsetY=100;
const eyeRadius=30

function App() {
  return (
    <>
      <svg width={width} height={height}>
    <circle 
    r={centerY-strokeWidth/2} 
    cx={centerX} 
    cy={centerY} 
    fill="yellow" 
    stroke="black" 
    stroke-width={strokeWidth}/>
    <circle
    cx={centerX - eyeOffsetX}
    cy={centerY - eyeOffsetY}
    r={eyeRadius}
    />
    <circle
    cx={centerX + eyeOffsetX}
    cy={centerY - eyeOffsetY}
    r={eyeRadius}
    />
    </svg>
    </>
  )
}

export default App
