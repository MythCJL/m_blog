import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import data from './data.json';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '2em 1em',
  },
};

function AppPost(props) {
  const { classes, match } = props;
  const cards = data.cards;
  const card = cards[match.params.id];
  return (
    <div className={classes.root}>
      <Typography type="display1" align="center">
        {card.title}
      </Typography>
      <Typography type="title ">
        {card.detail}
      </Typography>
    </div>
  );
}

AppPost.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default withStyles(styles)(AppPost);
