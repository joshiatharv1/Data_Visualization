import React from 'react';

  const width=900;
  const height=500;
  const centerX=width/2;
  const centerY=height/2;
  const strokeWidth=10;

  const App = () => (<><svg width={width} height={height}>
    <circle 
    r={centerY-strokeWidth/2} 
    cx={centerX} 
    cy={centerY} 
    fill="yellow" 
    stroke="black" 
    stroke-width={strokeWidth}/>
    </svg>
    </>    );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  