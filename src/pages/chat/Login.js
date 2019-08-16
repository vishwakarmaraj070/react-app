import React from 'react';


export default class Login extends React.Component {

  render() {

    const{forgotPassClick, resisterClick, loginClick} = this.props;
    return (
      <div>
        <div className="login-form">
          <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Login</strong>
            </h5>
            <div className="card-body px-4">
              <form className="text-center">
                <div className="md-form">
                  <input type="text" id="mobile" className="form-control" />
                  <label htmlFor="mobile">Mobile No</label>
                </div>
                <div className="md-form">
                  <input type="password" id="password" className="form-control" />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="d-flex justify-content-around">
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
                      <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember me</label>
                    </div>
                  </div>
                  <div>
                    <a href="!"
                      onClick={ (e) => {
                        e.preventDefault();
                        forgotPassClick();
                      }}
                    >Forgot password?</a>
                  </div>
                </div>
                <button className="btn btn-outline-info btn-md btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit"
                  onClick={ (e) =>{
                    e.preventDefault();
                    loginClick();
                  }}
                >Login</button>

                <p>Not a member?
                  <a href="!"
                   onClick={ (e) => {
                    e.preventDefault();
                    resisterClick();
                  }}
                  >Register</a>
                </p>

                <p>or sign in with:</p>
                <button type="button" className="border-primary btn-fb btn-floating btn-sm mx-1 waves-effect waves-light hoverable  primary-color white-text">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="border-info btn-fb btn-floating btn-sm mx-1 waves-effect waves-light hoverable info-color-dark white-text">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="border-info btn-fb btn-floating btn-sm mx-1 waves-effect waves-light hoverable info-color white-text">
                  <i className="fab fa-linkedin-in"></i>
                </button>
                <button type="button" className="border-danger btn-fb btn-floating btn-sm mx-1 waves-effect waves-light hoverable danger-color white-text">
                  <i className="fab fa-google"></i>
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>
    );
  }
}