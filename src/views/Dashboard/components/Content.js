import React from 'react';
import Grid from '@material-ui/core/Grid';
// Components
import Widget from './Widget';
import AnchorNumber from './AnchorNumber';
import TagNumber from './TagNumber';
import CalculatedPointsNumber from './CalculatedPointsNumber';
import Warnings from './Warnings';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Externals
import PropTypes from 'prop-types';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: { 
    height: '100%'
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

function Content(props) {
  const { classes } = props
  let widget_height = props.content_height * 0.3
  let coordinate_widget_height = props.content_height * 0.9
  let tag_low_battery_list_widget_height = props.content_height * 0.6
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item md={3} xs={12}>
          <AnchorNumber height={widget_height}></AnchorNumber>
        </Grid>
        <Grid item md={3} xs={12}>
          <TagNumber height={widget_height}></TagNumber>
        </Grid>
        <Grid item md={3} xs={12}>
          <CalculatedPointsNumber height={widget_height}></CalculatedPointsNumber>
        </Grid>
        <Grid item md={3} xs={12}>
          <Warnings height={widget_height}></Warnings>
        </Grid>
        <Grid item md={9} xs={12}>
          <Widget height={coordinate_widget_height}></Widget>
        </Grid>
        <Grid item md={3} xs={12}>
          <Widget height={tag_low_battery_list_widget_height}></Widget>
        </Grid>
      </Grid>
    </div>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Content)