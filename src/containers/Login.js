import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.js';
import {sendLogin} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import general from '../css/general.js';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Login extends Component{
  constructor(props){
    super(props);
  }
  handleSubmit = (values) => {
    return this.props.sendLogin(values);
  }
  render(){
    return (
      <div className={css(styles.page)}>
        <div className={css(general.panel)}>
          <h1>Login</h1>
          <LoginForm onSubmit={this.handleSubmit}/>
        </div>
      </div>    );
  }
}

let mapStateToProps = state => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators({
    sendLogin
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
