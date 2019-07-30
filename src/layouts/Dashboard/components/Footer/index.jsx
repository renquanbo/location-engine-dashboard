import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  company: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    color: theme.palette.text.secondary
  },
  footerDivider: {
    backgroundColor: theme.palette.divider
  }
});

class Footer extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <Divider className={classes.footerDivider}/>
        <Typography
          className={classes.company}
          variant="body1"
        >
          &copy; Breadcrumb Data Limited 2019
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
