import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import user from '../../images/userImage.png';
import ScrollableIcons from '../../components/ScrollableIcons';
const header = 64;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: '3rem',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  box: {
    height: `calc(100% - ${header}px)`,
    textAlign: 'center',
    position: 'relative',
  },
  startPage: {
    minHeight: `calc(100% - ${header}px)`,
  },
  info: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -30%)',
    verticalAlign: 'middle',
    padding: '5px',
    fontSize: '24px',
  },
  large: {
    width: '120px',
    height: '120px',
    margin: '0.5rem auto',
    '@media(min-height: 400px)': {
      width: '200px',
      height: '200px',
    },
  },
  text: {
    fontFamily: 'cursive; sans-serif',
    padding: '0.5rem 1rem',
    fontSize: '18px',
    '@media(min-width: 400px)': {
      fontSize: '32px',
    },
  },
  btn: {
    margin: '0px 0.3rem',
    textDecoration: 'none',
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} id="#">
        <div className={classes.drawerHeader} />
        <Box className={classes.box}>
          <div className={classes.startPage} id="#">
            <div className={classes.info}>
              <div style={{ margin: '0px auto' }}>
                <Avatar alt="Achal Shah" src={user} className={classes.large} />
                <ScrollableIcons />
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default HomePage;
