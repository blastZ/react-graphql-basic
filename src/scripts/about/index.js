import React, { PureComponent } from 'react';
import { About } from './components/About';
import { connect } from 'react-redux';

class Container extends PureComponent {
  render() {
    return (
      <div className="container">
        <About />
      </div>
    )
  }
}

const mapState = ({ aboutReducer }) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Container);