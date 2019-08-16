import React from 'react';


import '../assets/component.css'
const EmployeeForm = (props) => {

  const { email, name, mobile, isEditable, readOnly, isFormValid, isRequired, EmployeeFormSubmitHandler, minRequired, isEmailValid,  onChangeHandler, EmployeeUpdateHander, cancleHandler } = props;
  return (

    <form id="employee-form" onSubmit={(e) => {
      e.preventDefault();
      EmployeeFormSubmitHandler();
    }} >
      <div className="md-form position-relative">
        <input type="text" id="name"
          className="form-control"
          required
          value={name}
          onBlur={(e) => {
            isRequired(e)
          }}
          onChange={ (e) => {
            e.preventDefault();
            isRequired(e);
            minRequired(e);
            onChangeHandler(e)
          }} />
        <label htmlFor="name">Name</label>
        <span className=" name show-error req" >
          Name is required!
        </span>
        <span className=" name show-error min" >
          minimum 3 charector is required!
        </span>
      </div>
      <div className="md-form position-relative">
        <input type="text" id="email"
          className="form-control"
          required
          value={email}
          onBlur={(e) => {
            isRequired(e)
          }}
          onChange={ (e) => {
            e.preventDefault();
            isRequired(e);
            isEmailValid(e);
            onChangeHandler(e)
          }} />
        <label htmlFor="email">Email</label>
        <span className=" email show-error req" >
          Email is required!
        </span>
        <span className=" email show-error e-valid" >
          invalid email
        </span>
      </div>
      <div className="md-form position-relative">
        <input type="text" readOnly={readOnly ? true : false} id="mobile"
          className="form-control"
          required
          value={mobile}
          onBlur={(e) => {
            isRequired(e)
          }}
          onChange={ (e) => {
            e.preventDefault();
            isRequired(e);
            onChangeHandler(e)
          }} />
        <label htmlFor="mobile">Mobile</label>
        <span className=" mobile show-error req" >
          Mobile is required!
        </span>
      </div>
      <div className="md-form text-center d-flex justify-content-center">
        <button type="submit"
          onClick={(e) => {
            e.preventDefault();
            isEditable ? EmployeeUpdateHander() : EmployeeFormSubmitHandler();
          }}
          className="btn btn-md btn-outline-danger waves-effect waves-dark"
          disabled={
            isFormValid ? false : true
          }>
          {
            isEditable ? 'Update' : 'Submit'
          }
          
          </button>

          {
            isEditable ? <button type="submit"
            onClick={(e) => {
              e.preventDefault();
              cancleHandler();
            }}
            className="btn btn-md btn-outline-danger waves-effect waves-dark">
            Cancle
            </button> : ''
          }
      </div>
    </form>
  );
}

export default EmployeeForm;