// @flow-weak
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import AppDrawerNavItem from './AppDrawerNavItem.jsx';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    position: 'fixed',
    zIndex: 1,
  },
  appbar: {
    backgroundColor: '#2196f3',
    color: 'rgb(255, 255, 255)',
  },
  flex: 1,
});

function AppDrawer(props) {
  const classes = props.classes;
  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <AppDrawerNavItem />
          <Typography className={classes.flex} type="title" color="inherit" noWrap>
            Mythmie
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

AppDrawer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    flex: PropTypes.string,
    menuButton: PropTypes.object,
  }).isRequired,
};

export default withStyles(styles)(AppDrawer);
