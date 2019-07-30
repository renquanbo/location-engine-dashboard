import React from 'react';
import Paper from '@material-ui/core/Paper';
// Material helpers
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Textfit } from 'react-textfit';

const styles = theme => ({
  title: {
    fontWeight: 700,
    color: theme.palette.getContrastText(theme.palette.warning.main)
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.warning.main
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main
  },
  warningNumber: {
    marginTop: '25%',
    textAlign: 'center',
    color: theme.palette.common.white
  }
});


class Warnings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      warning_number: 0
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
          WARNINGS
        </Typography>
        <Textfit mode="single" className={classes.warningNumber}>
          {this.state.warning_number}
        </Textfit>
      </Paper>
    )
  }
}

export default withStyles(styles)(Warnings)