import React from 'react';
import { Stage } from '@inlet/react-pixi';

import AnchorIcon from './AnchorIcon';
// Material helpers
import { withTheme } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';
import {setAuthenticationStatus} from '../../../actions';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    padding: theme.spacing(1)
  },
  stageContainer: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  }
})


class LocationCanvas extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width: 800,
      height: 600,
      level: {},
      anchorList:[]
    }
  }

  componentDidMount() {
    this.getAnchorListData()
    this.fixDpi(this.refs.anchorCanvas)
    this.drawAnchor(this.refs.anchorCanvas,95,50,'#03a9f4')
  }
  fixDpi(canvas) {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    const ctx = canvas.getContext('2d');
    let dpi = window.devicePixelRatio;
    let style_height = getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
  }

  getFloorPlan() {
    const self = this
    axios({
      method: 'get',
      url: '/configuration_service/level',
      headers: {
        'Authorization': localStorage.token_type + ' ' + localStorage.access_token
      }
    })
      .then(function(response){
        self.setState({floorPlan: response.data});
        console.log(self.state.floorPlan)
      })
      .catch(function(error){
        if(error.response.status === 400){
          self.props.dispatch(setAuthenticationStatus(false))
        }
      })
  }
  
  getAnchorListData() {
    const self = this
    axios({
      method: 'get',
      url: '/configuration_service/anchors',
      headers: {
        'Authorization': localStorage.token_type + ' ' + localStorage.access_token
      }
    })
      .then(function(response){
        self.setState({anchorList: response.data});
        console.log(self.state.anchorList)
      })
      .catch(function(error){
        if(error.response.status === 400){
          self.props.dispatch(setAuthenticationStatus(false))
        }
      })
  }

  drawAnchor(canvas, x, y, color){
    const ctx = canvas.getContext('2d');
    let dpi = window.devicePixelRatio;
    ctx.scale(dpi,dpi)
    let radius = 5;
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, radius * 2, 0.75 * Math.PI, 1.25 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, radius * 3, 0.75 * Math.PI, 1.25 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, radius * 2, 1.75 * Math.PI, 0.25 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, radius * 3, 1.75 * Math.PI, 0.25 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 15, y + 40);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 15, y + 40);
    ctx.moveTo(x - 13, y + 35);
    ctx.lineTo(x + 7, y + 20);
    ctx.lineTo(x - 4, y + 10);
    ctx.moveTo(x + 13, y + 35);
    ctx.lineTo(x - 7, y + 20);
    ctx.lineTo(x + 4, y + 10);
    ctx.stroke();
  }

  render(){
    
    const { classes } = this.props;
    return(
      <Paper>
        <div className={classes.stageContainer}>
          <div  
            style={{
              width: this.state.width + this.props.theme.spacing(2),
              height: this.state.height + this.props.theme.spacing(2),
              position: 'relative'
            }}>
            <Stage width={this.state.width} height={this.state.height} options={{ backgroundColor: 0x000000,padding: classes.root.padding }}>
            </Stage>
            <canvas ref='anchorCanvas' width={this.state.width} height={this.state.height} style={{border:'solid 1px',backgroundColor:'white',position: 'absolute', top:0, left:0, width:this.state.width, height: this.state.height}}>

            </canvas>
          </div>
        </div>
      </Paper>
    )
  }
}

function mapStateToProps (state) {
  return {isAuthenticated: state.authenticationStatus};
}

export default connect(mapStateToProps)(withTheme(withStyles(styles)(LocationCanvas)))