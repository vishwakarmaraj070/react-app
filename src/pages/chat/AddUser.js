import React from 'react';
import $ from 'jquery';

import LoginForm from './LoginForm';

export default class AddUser extends React.Component {

  constructor(props){
    super(props);

    this.firstStepClick = this.firstStepClick.bind(this);

    this.state = ({
      firstStep: true
    })
  }

  firstStepClick(){
    $('#1Step').addClass('go-right');
    setTimeout( () => {
      
      this.setState({
        firstStep : false
      })
      $('#loginForm').addClass('go-left');
    },500)
    


  }

  render(){
    return(
      <div className="h-100">
        <div className="user-login-container h-100">
          <div className="flex-center user-login">
          {
            this.state.firstStep 
            ?
            <div id="1Step" className="first-step text-center rightTranslate">
              <img className="img-thumbnail mb-3 z-depth-1" src={require('../../assets/images/logo.png')} alt="logo" />
              <h4 className="h4-responsove">Welcome To ChatApp</h4>
              <p>You will love to use</p>
              <button className="btn btn-outline-pink btn-md waves-effect waves-dark mt-3"
                onClick={ (e) => {
                  e.preventDefault();
                  this.firstStepClick();
                }}
              >Let's Go</button>
            </div>
            :
            <div id="loginForm" className="login-form leftTranslate" >
              <LoginForm  updateIsOpen={this.props.updateIsOpen}/>
            </div>
          }
          </div>
        </div>
      </div>

    )
  }
}