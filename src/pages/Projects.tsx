import React from 'react';
import { map } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Section from '../components/Section';
import { sectionConfig } from '../LayoutConfig';
import Masonry from 'react-masonry-css'
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Projects = (props: any) => {
  // from https://github.com/mui-org/material-ui/issues/17000
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1, 0, 1, 0),
    },
    paper: {
      marginBottom: theme.spacing(1),
    },
    masonryGrid: {
      display: "flex",
      marginLeft: theme.spacing(-4),
      width: "inherit",
    },
    masonryColumn: {
      paddingLeft: theme.spacing(4),
      backgroundClip: "padding-box",
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  const breakpointCols = {
    default: 2,
    [theme.breakpoints.values.xl]: 2,
    [theme.breakpoints.values.lg]: 2,
    [theme.breakpoints.values.md]: 2,
    [theme.breakpoints.values.sm]: 1,
    [theme.breakpoints.values.xs]: 1,
  };

  return (
    <>
    <Grid item className="body-description">
        I am a full-stack developer who has heavy interest in UI/UX design. I am passionate about delivering the best customer experience by discovering user pain points and creating solutions for them.
      </Grid>
      <Masonry
        breakpointCols={breakpointCols}
        className={classes.masonryGrid}
        columnClassName={classes.masonryColumn}
      >
        {map(sectionConfig, config => {
            return (
                <Section {...config} />
            );
          })}
      </Masonry>
    </>
  );
}

export default Projects;