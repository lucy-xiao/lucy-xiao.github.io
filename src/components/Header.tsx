import React from 'react';
import Grid from '@material-ui/core/Grid';
import { map } from 'lodash';
import {
  Link,
  useLocation,
} from "react-router-dom";

const linkConfig = [
  {
    pathname: '/',
    title: 'Project'
  },
  // {
  //   pathname: '/about',
  //   title: 'About'
  // }
]


const Header = (props: any) => {
  let location = useLocation();
  return (
      <Grid container direction="row" spacing={1}>
        <Grid item container direction="row" justify="flex-start" alignItems="center" xs={6} sm={9}>
          <Grid item className="logo">LUCY XIAO</Grid>
        </Grid>
        
        <Grid item container direction="row" justify="flex-end" alignItems="center" xs={6} sm={3} spacing={1}>
          {map(linkConfig, config => {
            const className = config.pathname === location.pathname ? "header-item-active" : "header-item";
            return (
              <Grid key={config.title} item className={className}>
                <Link to={config.pathname}>{config.title}</Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
  )
}

export default Header;