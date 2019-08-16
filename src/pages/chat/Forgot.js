import React from 'react';
import $ from 'jquery';

import ResetPassword from './ResetPassword';


export default class Forgot extends React.Component {
  constructor(props){
    super(props);

    this.getOTPClick = this.getOTPClick.bind(this);
    this.newPasswordSave = this.newPasswordSave.bind(this);


    this.state = ({
      resetPass: true,
    })
  }


  getOTPClick(mob){
    $('#getOtp.rightTranslate').addClass('go-right')
    setTimeout( () =>{
      this.setState({
        resetPass: false
      })

      $('#ResetPassword.leftTranslate').addClass('go-left');
    }, 500)
   
  }

  // reset password

  newPasswordSave(pass, logTrue){
      this.props.updateLogin(logTrue);

  }

  render() {

    return (
      <div>
        {
          this.state.resetPass 
          ?
         <div id="getOtp" className="card rightTranslate">
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Forgot Password</strong>
            </h5>
            <div className="card-body px-4">
              <form className="text-center">
                <div className="md-form">
                  <input type="text" id="mobile" className="form-control" />
                  <label htmlFor="mobile">Enter your Mobile No</label>
                </div>
                <button className="btn btn-outline-info btn-md btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit"
                  onClick={ (e) => {
                    e.preventDefault();
                    this.getOTPClick('mobile no');
                  }}
                >Get OTP</button>
              </form>
            </div>
          </div>
          :
          <div id="ResetPassword" className="leftTranslate">
            <ResetPassword newPasswordSave={this.newPasswordSave} />
          </div>
        }
      </div>
    );
  }
}