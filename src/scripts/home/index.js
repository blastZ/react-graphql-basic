import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Home } from './components/Home';

class Container extends PureComponent {
  render() {
    return (
      <div className="container">
        <Home />
      </div>
    )
  }
}

const mapState = ({ homeReducer }) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Container);