import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
  FaSchool,
} from 'react-icons/fa';
import { Avatar, Button } from '@material-ui/core';
import user from '../../images/userImage.png';
import DataList from '../../components/DataList';

const header = 64;
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: `calc(100vh - ${header}px)`,
    paddingTop: '3rem',
    flexGrow: 1,
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
  lists: {
    padding: '3px 5px',
    listStyle: 'none',
    fontSize: '20px',
  },
  faIcons: {
    margin: '0px 5px',
    verticalAlign: 'text-top',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  typo: {
    display: 'inline-block',
    margin: 'auto',
    verticalAlign: 'top',
  },
  gridItem: {
    textAlign: 'center',
  },
  listText: {
    width: '100%',
    maxWidth: '100%',
    marginTop: '0.5 rem',
  },
  resumeBtn: {
    textDecoration: 'none',
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div id="profile">
      <div className={classes.drawerHeader} />
      <Container fixed className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Avatar alt="Achal Shah" src={user} className={classes.large} />
            <ul style={{ padding: '0px' }}>
              <li className={classes.lists}>
                <FaMapMarkerAlt className={classes.faIcons} />
                <Typography className={classes.typo}>
                  Ahmedabad, India.
                </Typography>
              </li>
              <li className={classes.lists}>
                <FaEnvelope className={classes.faIcons} />
                <Typography className={classes.typo} color="primary">
                  shahachal.32@gmail.com
                </Typography>
              </li>
            </ul>
            <div>
              <Link className={classes.resumeBtn} to="/resume">
                <Button variant="contained" color="secondary">
                  Resume
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <List className={classes.listText}>
              <DataList
                link={FaBriefcase}
                title="Software Engineer"
                heading="MLveda"
                content="Working on technologies such as ReactJs and Shopify Polaris."
              />
              <DataList
                link={FaGraduationCap}
                title="College / University"
                heading="Silver Oak College Of Engineering and Technology"
                content="B.E. 2021 Graduate in Computer Engineering with 8.65 CGPA"
              />
              <DataList
                link={FaUniversity}
                title="Higher Secondary School"
                heading="Florescent Public School"
                content="Completed 12th grade from Florescent Public school with 76.31% (2015-2017)"
              />
              <DataList
                link={FaSchool}
                title="10th Grade"
                heading="Nutan English School"
                content="Completed 10th grade from Nutan English school with 78.50% in (2014-2015)"
              />
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
