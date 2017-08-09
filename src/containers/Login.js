import React, {Component} from 'react';
import LoginForm from '../components/LoginForm.js';

class Login extends Component{


  handleSubmit = (values) => {
    alert("values");
  }

  
  render(){
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Login;
