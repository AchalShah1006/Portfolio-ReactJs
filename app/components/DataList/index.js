/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: '2rem',
  },
  span: {
    display: 'block',
  },
  avatar: {
    backgroundColor: '#45444473',
    padding: 5,
  },
}));

function DataList(props) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      <ListItemAvatar>
        <Avatar
          variant="square"
          className={classes.avatar}
          component={props.link}
        />
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={
          <span>
            <Typography
              component="span"
              variant="h6"
              color="textPrimary"
              className={classes.span}
            >
              {props.heading}
            </Typography>
            {props.content}
          </span>
        }
      />
    </ListItem>
  );
}

export default React.memo(DataList);
