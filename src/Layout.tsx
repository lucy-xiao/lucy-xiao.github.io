import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
// import {
//   Switch,
//   Route
// } from "react-router-dom";
import {
  Switch,
  Route
} from "react-router";

class Layout extends Component {

  render() {
  return (
    <Grid container>
      <Grid container className="header" direction="row" justify="center">
        <Grid item container xs={9} >
          <Header/>
        </Grid>
      </Grid>
      <Grid container className="body" direction="row" justify="center">
        <Grid item container xs={9}>
            {/* <Switch> */}
              {/* <Route exact path="/" component={Projects} /> */}
              {/* <Route path="/about" component={About} /> */}
            {/* </Switch> */}
            <Projects />
        </Grid>
        <Grid container className="footer" direction="row" justify="center" alignItems="flex-end">
          <Grid item container xs={9} >
            <Footer/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
}
export default Layout;