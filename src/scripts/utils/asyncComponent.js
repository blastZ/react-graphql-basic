import React, { Component } from 'react';

export const asyncComponent = (loadComponent, name="default") => (
  class AsyncComponent extends Component {
    state = {
      Component: null
    }
    
    componentDidMount() {
      const { Component } = this.state;
      if(Component) return;
      loadComponent()
        .then((module) => module[name])
        .then((Component) => {
          this.setState({
            Component
          })
        })
        .catch((error) => {
          console.log('Can not load component in AsyncComponent');
          throw(error);
        })
    }

    render() {
      const { Component } = this.state;
      return (
        Component ? <Component {...this.props} /> : null
      )
    }
  }
)