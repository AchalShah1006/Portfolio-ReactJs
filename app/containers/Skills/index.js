import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
  FaCode,
  FaDesktop,
  FaLaptopCode,
  FaBootstrap,
  FaDatabase,
  FaCloudUploadAlt,
} from 'react-icons/fa';
import Cards from '../../components/Cards';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '3rem',
  },
  grid: {
    flexGrow: 1,
  },
  item: {
    margin: '0px auto',
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

export default function Skills() {
  const classes = useStyles();
  return (
    <div id="skills" className={classes.root}>
      <div className={classes.drawerHeader} />
      <Container fixed>
        <Grid container className={classes.grid}>
          <Grid item xs className={classes.item}>
            <Cards
              comp={<FaDesktop />}
              title="Frontend"
              code="HTML, CSS, JavaScript, ReactJs"
            />
          </Grid>
          <Grid item xs className={classes.item}>
            <Cards
              comp={<FaCode />}
              title="Backend"
              code="Flask, Django, NodeJs"
            />
          </Grid>
          <Grid item xs>
            <Cards
              comp={<FaBootstrap />}
              title="UI Libraries"
              code="Material UI, Bootstrap, Polaris"
            />
          </Grid>
          <Grid item xs>
            <Cards
              comp={<FaLaptopCode />}
              title="Programming Lang"
              code="Python, C, CPP"
            />
          </Grid>
          <Grid item xs>
            <Cards
              comp={<FaDatabase />}
              title="DATABASE"
              code="MySQL ,PSQL, MongoDB"
            />
          </Grid>
          <Grid item xs>
            <Cards
              comp={<FaCloudUploadAlt />}
              title="CLOUD PLATFORMS"
              code="AWS, GCP"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
