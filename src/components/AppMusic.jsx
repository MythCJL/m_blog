import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import PauseIcon from 'material-ui-icons/Pause';

import test from '../static/test.png';
import music from '../static/Feelings.mp3';

const styles = theme => ({
  root: {
    display: 'flex',
    alignSelf: 'flex-end',
    width: '100%',
    backgroundColor: '#2196f3',
    color: '#f0f8ff',
  },
  progress: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  linear: {
    display: 'flex',
    width: 'inherit',
  },
  cover: {
    width: 51,
    height: 51,
    margin: theme.spacing.unit,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
  },
  button: {
    color: '#f0f8ff',
  },
  time: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function formatTime(time) {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  let timer = '';
  if (min < 10) {
    timer = '0';
  }
  timer = `${timer}${min}:`;
  if (sec < 10) {
    timer += '0';
  }
  timer += sec;
  return timer;
}

class AppMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      value: 0,
      currentTime: 0,
      duration: 194.821224,
    };
    this.handleClick = this.handleClick.bind(this);
    this.time = this.time.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.progressClick = this.progressClick.bind(this);
  }

  componentDidMount() {
    this.updateStatus();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick() {
    const audio = this.play;
    if (this.state.isPlay) {
      audio.pause();
      clearInterval(this.timer);
    } else {
      audio.play();
      this.timer = setInterval(this.time, 400);
    }
    this.setState({
      isPlay: !this.state.isPlay,
    });
  }

  time() {
    const duration = this.state.duration;
    const currentTime = this.play.currentTime;
    const value = (currentTime / duration) * 100;
    this.setState({
      value,
      currentTime,
    });
  }

  progressClick(event) {
    const width = event.target.offsetWidth;
    const left = event.target.getBoundingClientRect().left;
    const clientX = event.clientX;
    const offset = clientX - left;
    const audio = this.play;
    const value = (offset / width) * 100;
    const currentTime = (this.state.duration * value) / 100;
    audio.currentTime = currentTime;
    this.setState({
      value,
      currentTime,
    });
  }

  updateStatus() {
    const currentTime = this.play.currentTime;
    this.setState({
      currentTime,
    });
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar>
          <Typography className={classes.flex} type="title" color="inherit" noWrap>
            Maps
          </Typography>
          <div className={classes.controls}>
            <IconButton className={classes.button}>
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton className={classes.button}>
              {this.state.isPlay ?
                <PauseIcon className={classes.playIcon} onClick={this.handleClick} /> :
                <PlayArrowIcon className={classes.playIcon} onClick={this.handleClick} />
              }
            </IconButton>
            <IconButton className={classes.button}>
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </div>
        </Toolbar>
        <div className={classes.time}>
          <Typography type="button">
            {formatTime(this.state.currentTime)}
          </Typography>
        </div>
        <div className={classes.progress} >
          <LinearProgress
            className={classes.linear}
            mode="determinate"
            value={this.state.value}
            onClick={this.progressClick}
          />
        </div>
        <div className={classes.time}>
          <Typography type="button">
            {'03:14'}
          </Typography>
        </div>
        <div className={classes.cover}>
          <img src={test} alt="maps" />
        </div>
        <audio ref={(e) => { this.play = e; }} src={music}><track kind="captions" /> </audio>
      </div>
    );
  }
}

AppMusic.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default withStyles(styles, { withTheme: true })(AppMusic);
