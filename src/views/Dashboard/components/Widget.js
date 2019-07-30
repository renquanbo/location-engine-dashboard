import React from 'react'
import Paper from '@material-ui/core/Paper';

export default function Widget(props) {
  return(
    <Paper>
      <div style={{height: props.height}}>
        this is a widget
      </div>
    </Paper>
  )
}