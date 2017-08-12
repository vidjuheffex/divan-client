import React, {Component} from 'react';
import SignupForm from '../components/SignupForm.js';
import {sendSignup} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Signup extends Component{
  constructor(props){
    super(props);
  }

  handleSubmit = (values) => {
    return this.props.sendSignup(values);
  }
 
  render(){
    return (
      <div>
        <h1>Signup</h1>
        <SignupForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({
    sendSignup
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
