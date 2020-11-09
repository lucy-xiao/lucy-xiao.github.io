import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const Footer = (props: any) => {
  return (
      <Grid container direction="row" spacing={1}>
        <Grid item container direction="row" justify="flex-start" alignItems="center" xs={6} sm={6}>
          <Grid item className="logo">Contact Me</Grid>
        </Grid>
        <Grid item container direction="row" justify="flex-end" alignItems="center" xs={6} sm={6} spacing={1}>
          <Grid item className="header-item">
            <a href="https://www.linkedin.com/in/lucygxiao/" target="__blank">LinkedIn</a>
          </Grid>
          <Grid item className="header-item">
            <a href="mailto:lucy77xiao@gmail.com" target="__blank">Email</a>
          </Grid>
          <Grid item className="header-item">
            <a href="http://docs.google.com/gview?url=https://github.com/lucy-xiao/lucy-xiao.github.io/tree/v2-refresh/src/resources/Resume2020.pdf&embedded=true" target="__blank">Resume</a>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Footer;