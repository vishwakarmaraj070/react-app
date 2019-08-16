import React from 'react';
import $ from 'jquery';

class SingUp extends React.Component {
  constructor(props){
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.singUpSubmitHandler = this.singUpSubmitHandler.bind(this);
    this.conformPasswordHandler = this.conformPasswordHandler.bind(this);

    this.state= ({
      firstname: '',
      lastname: '',
      phone: '',
      password: '',
      conPassword: '',
      isSingupValid: true
    })
  }

  // onchange handler
  onChangeHandler(e, valType){
    let target = $(e.target);
    let targetSpan = $(target).siblings();
    let type = valType;
    let targetMinRequired = $(target).attr('minmum');
    
    // required and min checking error setup
    if( $(target).attr('required') === 'required'){
      if(e.target.value.length == 0){
        $(targetSpan[2]).removeClass('open')
       $(targetSpan[1]).addClass('open')
      }else if(e.target.value.length < targetMinRequired){
        $(targetSpan[1]).removeClass('open')
        $(targetSpan[2]).addClass('open')
      }
      else{
        $(targetSpan[2]).removeClass('open')
      }
    }

    // assigne phone value 
    if(type === 'phone'){
      let phoneVal = e.target.value;
      if(!isNaN(phoneVal)) {
        if(phoneVal.length <= 10){
          this.setState({
            phone: e.target.value
          })
        }
      }
    }

    // password check
    if(type === 'password'){
      let password = e.target.value;
      this.setState({
        password,
        isSingupValid: true
      })
    }


    if(type === 'conpassword'){
      let conPassword = e.target.value;
      let {password} = this.state;
      if(password.length >=8 ){
        this.setState({
          conPassword,
        })
      }else{
        let passSpan = $('input#password').siblings()[1];
        console.log(passSpan)
        $(passSpan).addClass('open');
        alert('First fill the password')
      }
    }


    // // form validation set
    // let AllRequiredInput =  $('#singupForm input[required]')
    // AllRequiredInput.map( (input, index) => {
    //   if(AllRequiredInput[input].value.length > 0 ){
    //     this.setState({
    //       isSingupValid : false
    //     })
    //   }
    //   else{
    //     this.setState({
    //       isSingupValid : true
    //     })
    //   }
    // })

  }

  // view password
  viewPassWord(e){
    let eyeClose = 'fas fa-eye-slash';
    let target = $(e.target).attr('class');
    let targetInput = ($(e.target).siblings()[0]);
    if(target === 'fas fa-eye'){
      $(e.target).attr('class', 'fas fa-eye-slash');
      
      $(targetInput).attr('type','text');
    }else{
      $(e.target).attr('class', 'fas fa-eye')
      $(targetInput).attr('type','password')
    }
  }

  // conform password handler
  conformPasswordHandler(e){
    let {password, conPassword} = this.state;
    let targetSpan = $(e.target).siblings();
    let target = $(e.target).val()
    if(target.length >= 8){
      if(target.toString().toLowerCase() != password.toString().toLowerCase()){
        $(targetSpan[2]).removeClass('open')
        $(targetSpan[3]).addClass('open')
        this.setState({
          isSingupValid: true
        })
        
      }else{
        $(targetSpan[3]).removeClass('open')
        this.setState({
          isSingupValid: false
        })
      }
    }
    else{
      this.setState({
        isSingupValid: true
      })
      $(targetSpan[3]).removeClass('open')
    }
  }
  

  // form handler
  singUpSubmitHandler(){
    this.props.updateLogin(true);
    console.log('form submit');
  }

  render() {
    return (
      <div>
        <div className="card mx-3">
          <h5 className="card-header info-color white-text text-center py-4">
            <strong>Sign up</strong>
          </h5>
          <div className="card-body px-3">
            <form id='singupForm' className="text-center" 
              noValidate
              onSubmit={ (e) => {
                e.preventDefault();
                this.singUpSubmitHandler()
              }}>
              <div className="form-row">
                <div className="col">
                  <div className="md-form mb-0">
                      <input type="text" id="materialRegisterFormFirstName" noValidate required minmum="3"  className="form-control" 
                      onBlur={ (e) =>
                        this.onChangeHandler(e, 'name')
                      }
                      onChange={ (e) =>{
                        this.onChangeHandler(e, 'name');
                      }}
                    />
                    <label htmlFor="materialRegisterFormFirstName">First name</label>
                    <span className="required">First Name Required</span>
                    <span className="minmum">minimum 3 charector required</span>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form mb-0">
                    <input type="text" id="materialRegisterFormLastName" noValidate required minmum="3" className="form-control" 
                    onBlur={ (e) =>
                      this.onChangeHandler(e, 'lastname')
                    }
                     onChange={ (e) =>{
                      this.onChangeHandler(e, 'lastname');
                    }}/>
                    <label htmlFor="materialRegisterFormLastName">Last name</label>
                    <span className="required">Last Name Required</span>
                    <span className="minmum">minimum 3 charector required</span>
                  </div>
                </div>
              </div>

              <div className="md-form">
                <input type="text" id="materialRegisterFormPhone" noValidate required minmum="10" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" 
                value={this.state.phone}
                 onBlur={ (e) =>
                  this.onChangeHandler(e, 'phone')
                }
                onChange={ (e) =>{
                  this.onChangeHandler(e, 'phone');
                }}/>
                <label htmlFor="materialRegisterFormPhone">Phone number</label>
                <span className="required">Phone Required</span>
                <span className="minmum">must be 10 number required</span>
              </div>

              <div className="md-form">
                <input type="password" id="password" className="form-control" minmum="8" noValidate required aria-describedby="materialRegisterFormPasswordHelpBlock"
                value={this.state.password} 
                 onBlur={ (e) =>
                  this.onChangeHandler(e, 'password')
                }
                onChange={ (e) =>{
                  this.onChangeHandler(e, 'password');
                }}/>
                <label htmlFor="password">Password</label>
                <span className="required">Password Required</span>
                <span className="minmum">minimum 8 charector required</span>
                <div id="eye-view" className="fas fa-eye"
                onClick={ (e)=> {
                  e.preventDefault();
                  this.viewPassWord(e)
                }}
                ></div>
              </div>

              <div className="md-form">
                <input type="password" id="conformPassword" className="form-control" minmum="8" noValidate required aria-describedby="materialRegisterFormPasswordHelpBlock" 
                value={this.state.conPassword} 
                 onBlur={ (e) =>
                  this.onChangeHandler(e, 'conpassowrd')
                }
                onChange={ (e) =>{
                  this.onChangeHandler(e, 'conpassword');
                  this.conformPasswordHandler(e);
                }}/> 
                
                <label htmlFor="conformPassword">Conform Password</label>
                <span className="required">Conform password Required</span>
                <span className="minmum">minimum 8 charector required</span>
                <span className="conform">Passowrd did not match</span>
                <div id="eye-view" className="fas fa-eye"
                onClick={ (e)=> {
                  e.preventDefault();
                  this.viewPassWord(e)
                }}
                ></div>
              </div>

              <button className="btn btn-outline-info btn-rounded hoverable btn-block my-4 waves-effect z-depth-0" type="submit"
                disabled={this.state.isSingupValid}
                onClick={ (e) => {
                  e.preventDefault();
                  this.singUpSubmitHandler();
                }}
              >Sign in</button>

              <p>or sign up with:</p>

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
    );
  }
}

export default SingUp;