import React from "react";
import { connect } from 'react-redux';
import { User } from './User';
import { Main } from './Main';


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  setName: (name) => dispatch({
    type: 'SET_NAME',
    payload: name,
  }),
  setAge: (age) => dispatch({
    type: 'SET_AGE',
    payload: age,
  }),
});

class App extends React.Component {
  render() {
      return (
          <div className="container">
              <Main changeUsername={() => { this.props.setName('Kevin') }}/>
              <User username={this.props.userReducer.name}/>
          </div>
      );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
