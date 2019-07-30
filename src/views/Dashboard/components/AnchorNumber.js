import React from 'react';
import Paper from '@material-ui/core/Paper';
// Material helpers
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '88%'
  },
  'activeNumber': {
    fontSize: 75,
    position: 'absolute',
    left: '15%',
    top: '22%',
    color: theme.palette.primary.main
  },
  'activeNumberText': {
    fontSize: 25,
    marginLeft: 15
  },
  totalNumber: {
    fontSize: 30,
    position: 'absolute',
    right: '10%',
    bottom: '10%',
    color: theme.palette.secondary.main
  },
  totalNumberText: {
    fontSize: 15,
    marginRight: 15
  }
});

class AnchorNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active_number: 5,
      total_number: 10
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
          ANCHOR
        </Typography>
        <div className={classes.details}>
          <Typography className={classes.activeNumber}>
            {this.state.active_number}<span className={classes.activeNumberText}>active</span>
          </Typography>
          <Typography className={classes.totalNumber}>
            <span className={classes.totalNumberText}>total</span>{this.state.total_number}
          </Typography>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(AnchorNumber)
