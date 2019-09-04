import React from 'react';
import { Graphics } from '@inlet/react-pixi';

function AnchorIcon(props){
  let x = props.x;
  let y = props.y;
  let radius = props.radius;
  let color = props.color;
  return(
    <Graphics
      draw={g => {
        // clear the graphics
        g.clear()
        // start drawing
        g.beginFill(color)
        g.drawCircle(x,y,radius)
        g.endFill()
        g.lineStyle(1, color, 1, 0.5, false)
        g.beginFill(color)
        g.arc(x, y, radius * 2, 1.25 * Math.PI, 0.75 * Math.PI, true)
        g.arc(x, y, radius * 2 + 1, 0.75 * Math.PI, 1.25 * Math.PI, false)
        g.closePath()
        g.endFill()
        g.beginFill(color)
        g.arc(x, y, radius * 3, 1.25 * Math.PI, 0.75 * Math.PI, true)
        g.arc(x, y, radius * 3 + 1, 0.75 * Math.PI, 1.25 * Math.PI, false)
        g.closePath()
        g.endFill()
      }}
    >
    </Graphics>
  )
}

export default AnchorIcon;

