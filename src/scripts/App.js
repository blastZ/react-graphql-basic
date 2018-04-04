import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about';
import Home from './home';
import { asyncComponent } from './asyncComponent';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={asyncComponent(() => import('./home'))} />
        <Route exact path="/about" component={asyncComponent(() => import('./about'))} />
      </Switch>
    )
  }
}