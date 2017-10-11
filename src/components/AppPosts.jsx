import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Link } from 'react-router-dom';

import data from './data.json';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    margin: '2em',
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: 'none',
  },
});

function AppPosts(props) {
  const classes = props.classes;
  const cards = Object.values(data.cards);
  return (
    <div>
      {cards.map(card => (
        <Card className={classes.card} key={card.title}>
          <CardContent>
            <Typography type="headline" component="h2">
              {card.title}
            </Typography>
            <Typography component="p">
              {card.p}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={card.href} className={classes.link} >
              <Button raised color="accent">
                read more
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

AppPosts.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AppPosts);
