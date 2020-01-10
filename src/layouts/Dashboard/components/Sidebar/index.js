import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import LocationIcon from '@material-ui/icons/MapOutlined';
import AnchorIcon from '@material-ui/icons/RouterOutlined';
import TagIcon from '@material-ui/icons/SimCardOutlined';
import StatisticsIcon from '@material-ui/icons/ShowChartOutlined';
// import TextIcon from '@material-ui/icons/TextFieldsOutlined';
// import ImageIcon from '@material-ui/icons/ImageAspectRatioOutlined';
// import InfoIcon from '@material-ui/icons/InfoOutlined';
// import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

// Component styles
import styles from './styles';

class Sidebar extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link
            className={classes.logoLink}
            to="/"
          >
            <i className={classes.bcdLogo}></i>
          </Link>
        </div>
        <Divider className={classes.logoDivider} />

        <List
          component="div"
          disablePadding
        >
          <ListItem
            name="dashboard-link"
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem
            name="location-link"
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/location"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <LocationIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Location"
            />
          </ListItem>
          <ListItem
            name="anchor-mangement-link"
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/anchor-management"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <AnchorIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Anchor Management"
            />
          </ListItem>
          <ListItem
            name="tag-management-link"
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/tag-management"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Tag Management"
            />
          </ListItem>
          <ListItem
            name="statistics-link"
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/statistics"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <StatisticsIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Statistics"
            />
          </ListItem>
          <ListItem
            name="settings-link"
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/settings"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Settings"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
