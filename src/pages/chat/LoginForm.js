import React from 'react';
import $ from 'jquery';

import Login from './Login';
import Forgot from './Forgot';
import SingUp from './SingUp';


export default class LoginForm extends React.Component {

  constructor(props){
    super(props);

    this.forgotPassClick = this.forgotPassClick.bind(this);
    this.resisterClick = this.resisterClick.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
    this.loginClick = this.loginClick.bind(this);


    this.state = ({
      isLogin: true,
      isForgot: false,
      isSingUp : false
    })
  }

  // login
  forgotPassClick(){
    $('#login.rightTranslate').addClass('go-right');
    setTimeout(() => {
      this.setState({
        isLogin: false,
        isForgot: true
      })
      $('#forgot.leftTranslate').addClass('go-left');
    }, 500)
   
  }

  updateLogin(val){
    $('#ResetPassword').removeClass('leftTranslate');
    $('#ResetPassword').addClass('rightTranslate go-right');
    setTimeout( () => {
      this.setState({
        isLogin: val,
        isForgot: false
      });
      $('#login').addClass('leftTranslate go-left');
    }, 500)
  }

  resisterClick(){
    $('#login.rightTranslate').addClass('go-right');
    setTimeout(() => {
      this.setState({
        isLogin: false,
        isForgot: false,
        isSingUp: true
      })
      $('#singup.leftTranslate').addClass('go-left');
    }, 500)
    
  }

  loginClick(){
    this.props.updateIsOpen(true)
  }

  render(){

    return(
      <div>
        {
          this.state.isLogin 
          ?
          <div id="login" className="rightTranslate">
            <Login forgotPassClick={this.forgotPassClick} resisterClick={this.resisterClick} loginClick={this.loginClick} />
          </div>
          :
          this.state.isForgot 
          ?
          <div id="forgot" className="leftTranslate">
            <Forgot updateLogin={this.updateLogin}/>
          </div>
          :
          this.state.isSingUp 
          ?
          <div id="singup" className="leftTranslate">
            <SingUp updateLogin={this.updateLogin}/>
          </div>
          :
          <div>
            
          </div> 
        }
      </div>
    )
  }
}