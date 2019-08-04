import React from 'react';
import { Stage } from '@inlet/react-pixi';


class LocationCanvas extends React.Component{
  render(){
    return(
      <Stage width={300} height={300} options={{ backgroundColor: 0x1d2230 }}>

      </Stage>
    )
  }
}


export default LocationCanvas;