import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  root: {
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '20vh',
    backgroundColor: 'black',
  },
  footer: {
    fontSize: 'larger',
    color: 'rgb(250, 250, 250)',
  },
});

function AppFooter(props) {
  const classes = props.classes;
  return (
    <footer className={classes.root}>
      <Typography className={classes.footer} type="title" align="center">
        {'A simple blog using React.js & material-ui'}
      </Typography>
    </footer>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AppFooter);
