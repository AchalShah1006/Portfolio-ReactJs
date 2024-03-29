import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  iconBar: {
    display: 'flex',
  },
  tabs: {
    margin: 'auto',
  },
  svg: {
    height: '32px',
    width: '32px',
  },
});

function ScrollableIcons() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let val;
    if (value === 5) {
      val = setTimeout(() => {
        setValue(0);
      }, 1500);
    } else {
      val = setTimeout(() => {
        setValue(value + 1);
      }, 1500);
    }
    return () => {
      clearTimeout(val);
    };
  }, [value]);

  return (
    <div className={classes.root} id="resume">
      <div position="static" color="inherit" className={classes.iconBar}>
        <Tabs
          value={value}
          onChange={(e, v) => handleChange(e, v)}
          variant="scrollable"
          scrollButtons="on"
          textColor="primary"
          aria-label="scrollable force tabs"
          className={classes.tabs}
        >
          <Tab
            label="Html5"
            icon={<FaHtml5 className={classes.svg} />}
            style={{ color: '#e44d26' }}
          />
          <Tab
            label="Css3"
            icon={<FaCss3Alt className={classes.svg} />}
            style={{ color: '#264de4' }}
          />
          <Tab
            label="JavaScript"
            icon={<FaJsSquare className={classes.svg} />}
            style={{ color: '#ffc300' }}
          />
          <Tab
            label="React"
            icon={<FaReact className={classes.svg} />}
            style={{ color: '#61dbfb' }}
          />
          <Tab
            label="Python"
            icon={<FaPython className={classes.svg} />}
            style={{ color: 'green' }}
          />
          <Tab
            label="NodeJs"
            icon={<FaNodeJs className={classes.svg} />}
            style={{ color: '#8cc84b' }}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default ScrollableIcons;
