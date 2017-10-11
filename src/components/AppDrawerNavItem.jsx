/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';

import data from './data.json';

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: 'none',
    fontWeight: 500,
  },
  menuButton: {
    marginRight: 20,
  },
});

class AppDrawerNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const classes = this.props.classes;
    const list = Object.values(data.list);
    const drawer = (
      <div>
        <ToolBar>
          <Typography type="title" >
            mythmie-blog
          </Typography>
        </ToolBar>
        <Divider />
        <List>
          { list.map(item => (
            <Link
              to={item.href}
              className={classes.link}
              onClick={this.toggleDrawer}
              key={item.title}
            >
              <ListItem button>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          )) }
        </List>
      </div>
    );
    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer}
          className={classes.menuButton}
          color="contrast"
        >
          <MenuIcon />
        </IconButton>
        <Drawer type="temporary" open={this.state.open} onRequestClose={this.toggleDrawer} classes={{ paper: classes.paper }}>
          {drawer}
        </Drawer>
      </div>
    );
  }
}

AppDrawerNavItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AppDrawerNavItem);
