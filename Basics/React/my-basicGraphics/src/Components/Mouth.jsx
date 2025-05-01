import { arc } from 'd3-shape';


const Mouth=({mouthRadius})=>{
    const mouthArc = arc()
      .innerRadius(30)
      .outerRadius(mouthRadius)
      .startAngle(Math.PI/2)
      .endAngle(Math.PI * 1.5);
     return (<path d={mouthArc()}/>)
}

export default Mouth;