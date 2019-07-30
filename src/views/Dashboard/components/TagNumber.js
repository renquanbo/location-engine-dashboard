import React from 'react';
import Paper from '@material-ui/core/Paper';
// Material helpers
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    fontWeight: 700,
    color: '#03DAC6'
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.info.main
  },
  details: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '88%'
  },
  'onlineNumber': {
    fontSize: 75,
    position: 'absolute',
    left: '15%',
    top: '22%',
    color: theme.palette.getContrastText(theme.palette.info.main)
  },
  'onlineNumberText': {
    fontSize: 25,
    marginLeft: 15
  },
  totalNumber: {
    fontSize: 30,
    position: 'absolute',
    right: '10%',
    bottom: '10%',
    color: '#ffecb3'
  },
  totalNumberText: {
    fontSize: 15,
    marginRight: 15
  }
});

class TagNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online_number: 10,
      total_number: 30
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
          TAG
        </Typography>
        <div className={classes.details}>
          <Typography className={classes.onlineNumber}>
            {this.state.online_number}<span className={classes.onlineNumberText}>online</span>
          </Typography>
          <Typography className={classes.totalNumber}>
            <span className={classes.totalNumberText}>total</span>{this.state.total_number}
          </Typography>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(TagNumber)
