import React from "react";
import { connect } from 'react-redux';
import { User } from './User';
import { Main } from './Main';
import { SET_NAME, SET_AGE } from '../../store/reducer/userActions';


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  setName: (name) => dispatch(SET_NAME(name)),
  setAge: (age) => dispatch(SET_AGE(age)),
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
