import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Project from '../../components/Projects';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '3rem',
  },
  grid: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div id="work" className={classes.root}>
      <div className={classes.drawerHeader} />
      <Container fixed>
        <Grid container className={classes.grid}>
          <Project
            title="Portfolio"
            para="Portfolio created with Bootstrap."
            img="https://res.cloudinary.com/dayzwslj6/image/upload/v1631643541/samples/portfolio_mv1cgs.png"
            view="https://achalshah1006.github.io/"
          />
          <Project
            title="Tic Tac Toe"
            para="1v1 Online multiplayer game with chat room."
            img="https://res.cloudinary.com/dayzwslj6/image/upload/v1646161407/samples/tictactoe_qmld6p.png"
            view="https://tictactoe-client.herokuapp.com/"
          />

          <Project
            title="Background Colour Picker"
            para="On Click Background and Navbar Colour Picker"
            img="https://res.cloudinary.com/dayzwslj6/image/upload/v1633288514/samples/color-picker_s093sw.png"
            view="https://achalshah1006.github.io/colorPicker/"
          />

          <Project
            title="BookStore"
            para="Bookstore with the varieties of book's for book lovers."
            img="https://res.cloudinary.com/dayzwslj6/image/upload/v1631643544/samples/Bookstore_tqmzgu.png"
            view="https://github.com/AchalShah1006/BookStore"
          />

          <Project
            title="Covid 19 Tracker"
            para="Covid19 Tracker India."
            img="https://res.cloudinary.com/dayzwslj6/image/upload/v1631643541/samples/covid19_ed89ct.png"
            view="https://github.com/AchalShah1006/Covid19-Tracker-reactjs"
          />

          {/* <Project
            title="Student Portal"
            para="Website for college student to check thier profiles."
            img="https://res.cloudinary.com/dayzwslj6/image/upload/v1631643541/samples/studentPortal_hwx3ep.png"
            view=""
          /> */}
        </Grid>
      </Container>
    </div>
  );
}
