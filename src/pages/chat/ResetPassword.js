import React from 'react';
import $ from 'jquery';


export default class ResetPassword extends React.Component {
  

  render() {

    const {newPasswordSave} = this.props;
    return (
      <div>
         <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Reset Password</strong>
            </h5>
            <div className="card-body px-4">
              <form className="text-center">
                <div className="md-form">
                  <input type="password" id="resetpassword" className="form-control" />
                  <label htmlFor="resetpassword">New Password</label>
                </div>
                <button className="btn btn-outline-info btn-md btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit"
                  onClick={ (e) => {
                    e.preventDefault();
                    newPasswordSave('password', true);
                  }}
                >Save</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
}