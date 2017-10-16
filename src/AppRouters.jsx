import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import AppDrawer from './components/AppDrawer.jsx';
import AppHome from './components/AppHome.jsx';
import AppPosts from './components/AppPosts.jsx';
import AppPost from './components/AppPost.jsx';
import AppFooter from './components/AppFooter.jsx';
import AppMusic from './components/AppMusic.jsx';

const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      webkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  main: {
    flex: '0 0 auto',
    display: 'flex',
    marginTop: theme.spacing.unit * 7,
    minHeight: '100vh',
    width: '100%',
    justifyContent: 'center',
  },
});

function AppRouters(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppDrawer />
      <div className={classes.main}>
        <Route exact path="/" component={AppHome} />
        <Route exact path="/posts" component={AppPosts} />
        <Route path="/music" component={AppMusic} />
        <Route path="/posts/:id" component={AppPost} />
      </div>
      <AppFooter />
    </div>
  );
}
AppRouters.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AppRouters);
