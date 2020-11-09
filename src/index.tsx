import * as _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { countReducer } from "./reducers/app";
import Layout from './Layout';
import './style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


let store = createStore(countReducer);

const App = () => {
  return (
  <Provider store={store}>
    <Router>
      <Layout/>
    </Router>
  </Provider>
  );
};
  
ReactDOM.render(<App />, document.querySelector('#app'));