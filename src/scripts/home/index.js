import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Home } from './components/Home';

class Container extends PureComponent {
  sayHello = () => {
    this.props.sayHello();
  }

  render() {
    return (
      <div className="container">
        <Home
          sayHello={this.sayHello} />
      </div>
    )
  }
}

const mapState = ({ homeReducer }) => ({

})

const mapDispatch = (dispatch) => ({
  sayHello: () => dispatch({type: 'SAY_HELLO_ASYNC'})
})

export default connect(mapState, mapDispatch)(Container);