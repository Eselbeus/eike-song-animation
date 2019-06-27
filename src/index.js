import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/sketch'

ReactDOM.render(
  <Router>
    <P5Wrapper sketch={sketch} className="canvas"></P5Wrapper>
    <Route exact path="/" component={App} />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
