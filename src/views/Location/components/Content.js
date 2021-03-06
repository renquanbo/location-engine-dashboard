import React from 'react';

import LocationCanvas from './LocationCanvas';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Externals
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

function Content(props) {
  const { classes } = props

  return(
    <div className={classes.root}>
      <LocationCanvas></LocationCanvas>
    </div>
    
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content)