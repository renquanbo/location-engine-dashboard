import React from 'react';
import Paper from '@material-ui/core/Paper';
// Material helpers
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Textfit } from 'react-textfit';


const styles = theme => ({
  title: {
    fontWeight: 700,
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main
  },
  totalNumber: {
    marginTop: '22%',
    textAlign: 'center',
    color: theme.palette.primary.main
  }
});

class CalculatedPointsNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total_number: 11833497
    }
  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }
  render(){
    const { classes } = this.props
    return(
      <Paper className={classes.paper} style={{height: this.props.height, minHeight: '190px'}}>
        <Typography className={classes.title} variant="h4">
          POINTS
        </Typography>
        {/* <div className={classes.details}>

        </div> */}
          <Textfit mode="single" className={classes.totalNumber}>
            {this.state.total_number}
          </Textfit>

      </Paper>
    )
  }
}

export default withStyles(styles)(CalculatedPointsNumber)
