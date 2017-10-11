import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  AppHome: {
    display: 'flex',
    color: 'rgb(255, 255, 255)',
    paddingLeft: '32px',
    paddingRight: '32px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#2196f3',
  },
  title: {
    textAlign: 'center',
  },
};

function AppHome(props) {
  const classes = props.classes;
  return (
    <div className={classes.AppHome} >
      <Typography type="display2" color="inherit" noWrap>
        Mythmie-blog
      </Typography>
      <Typography type="headline" color="inherit" className={classes.title} >
        A simple blog based on material-ui
      </Typography>
    </div>
  );
}

AppHome.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AppHome);
