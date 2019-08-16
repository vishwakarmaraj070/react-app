import React from 'react';
import $ from 'jquery';
import * as EmailValidator from 'email-validator';

import '../assets/pages.css'
import EmployeeForm from '../component/EmployeeForm';
import EmployeeTable from '../component/EmployeeTable';
import Calculator from '../pages/Calculator';
import TicTacToe from '../pages/TicTacToe';
import ShortList from '../pages/ShortList';
import TableOpertation from '../pages/TableOpertation';



export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.EmployeeFormSubmitHandler = this.EmployeeFormSubmitHandler.bind(this);
    this.EmployeeUpdateHander = this.EmployeeUpdateHander.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.cancleHandler = this.cancleHandler.bind(this);
    this.isRequired = this.isRequired.bind(this);
    this.minRequired = this.minRequired.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);

    this.state = ({
      Employees: [
        {
          'name': 'Dev',
          'email': 'dev@gmail.com',
          'mobile': '9868956899'
        },
        {
          'name': 'Ram',
          'email': 'Ram@gmail.com',
          'mobile': '9868956899'
        },
        {
          'name': 'Ved',
          'email': 'Ved@gmail.com',
          'mobile': '9868956899'
        }
      ],
      isFormValid: false,
      readOnly: false,
      name: '',
      email: '',
      mobile: '',
      isEditable: false,
      empIndex: ''
    })

  }

  EmployeeFormSubmitHandler() {
    let Employees = this.state.Employees;
    Employees.push({
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
    })

    this.setState({
      Employees,
      name: '',
      email: '',
      mobile: ''
    })
  }

  EmployeeUpdateHander() {
    let Employees = this.state.Employees;
    Employees.splice(this.state.empIndex, 1, {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
    })
    this.setState({
      Employees,
      name: '',
      email: '',
      mobile: '',
      isEditable: false,
      isFormValid: false
    })
    $('form#employee-form label').removeClass('active');
  }

  cancleHandler() {
    this.setState({
      name: '',
      email: '',
      mobile: '',
      isEditable: false,
      isFormValid: false
    })
    $('form#employee-form label').removeClass('active');
  }

  onChangeHandler(e) {
    let targetId = e.target.id;
    let value = e.target.value;
    if (targetId == 'name') {
      this.setState({
        name: value
      })
    }
    else if (targetId == 'email') {
      this.setState({
        email: value
      })
    }
    else if (targetId == 'mobile') {
      if (!isNaN(value)) {
        if (value.length <= 10) {
          this.setState({
            mobile: value,
            isFormValid: true
          })
          if (value.length == 10) {
            this.setState({
              isFormValid: true
            })
          } else {
            this.setState({
              isFormValid: false
            })
          }
        }
      }
    }
  }

  isRequired(e) {
    let targetId = e.target.id;
    let target = $('.' + targetId + '.show-error.req');
    if (e.target.value === "") {
      $(target).addClass('show');
    }
    else {
      $(target).removeClass('show');
    }
  }

  minRequired(e) {
    let value = e.target.value;
    let targetId = e.target.id;
    let target = $('.' + targetId + '.show-error.min');
    if (value.length < 3 && value.length != 0) {
      $(target).addClass('show');
    }
    else {
      $(target).removeClass('show');
    }

  }

  isEmailValid(e) {
    let value = e.target.value;
    if (value.length > 0 && !EmailValidator.validate(value)) {
      $('.email.show-error.e-valid').addClass('show')
    }
    else {
      $('.email.show-error.e-valid').removeClass('show')
    }
  }

  render() {

    return (
      <div className="home mt-3">
        {/* Crud */}
        <h2 className="header-2 mb-3 white-text text-center font-weight-bold z-depth-2 p-2 unique-color-dark h2-responsive text-uppercase">crud</h2>
        <div className="row">
          <div className="col-lg-5 mb-lg-0 mb-3">
            <div className="Employee-form-container p-3 border-bottom border-danger z-depth-1">
              <h4 className="mb-3 p-2 text-center unique-color white-text h4-reponsive">
                Add Employee
              </h4>
              {/* employee form here */}
              <EmployeeForm name={this.state.name} email={this.state.email} mobile={this.state.mobile} isEditable={this.state.isEditable} readOnly={this.state.readOnly} isFormValid={this.state.isFormValid} EmployeeFormSubmitHandler={this.EmployeeFormSubmitHandler} isRequired={this.isRequired} minRequired={this.minRequired} isEmailValid={this.isEmailValid} onChangeHandler={this.onChangeHandler} EmployeeUpdateHander={this.EmployeeUpdateHander} cancleHandler={this.cancleHandler} />
            </div>
          </div>
          <div className="col-lg-7 mb-lg-0 mb-3">
            <div className="Employee-data-container p-3 border-bottom border-danger z-depth-1">
              <h4 className="mb-3 p-2 text-center unique-color white-text h4-reponsive">
                Employee Details
              </h4>
              {/* employee table here */}
              <EmployeeTable isEditable={this.state.isEditable} Employees={this.state.Employees} deleteHandler={this.deleteHandler} editHandler={this.editHandler} />
            </div>
          </div>
        </div>

        {/* calculator */}
        <hr className="hr-bold red" />
        <h2 className="header-2 mb-3 white-text text-center font-weight-bold z-depth-2 p-2 unique-color-dark h2-responsive text-uppercase">Calculator</h2>
        <div className="Calculator">
          <Calculator />
        </div>

        {/* tic tac toe */}
        <hr className="hr-bold red" />
        <h2 className="header-2 mb-3 white-text text-center font-weight-bold z-depth-2 p-2 unique-color-dark h2-responsive text-uppercase">TIc Tac toe</h2>
        <div className="tictactoe p-3 mb-3">
          <TicTacToe />
        </div>

        {/* Short list */}
        <hr className="hr-bold red" />
        <h2 className="header-2 mb-3 white-text text-center font-weight-bold z-depth-2 p-2 unique-color-dark h2-responsive text-uppercase">Short List</h2>
        <div className="short-list p-3 mb-3">
          <ShortList />
        </div>

         {/* table functionality */}
         <hr className="hr-bold red" />
        <h2 className="header-2 mb-3 white-text text-center font-weight-bold z-depth-2 p-2 unique-color-dark h2-responsive text-uppercase">Table Operations</h2>
        <div className="table-operation z-depth-1 p-3 mb-3">
          <TableOpertation />
        </div>
      </div>
    );
  }

  deleteHandler(index) {
    let Employees = this.state.Employees;
    Employees.splice(index, 1)
    this.setState({
      Employees
    })
  }

  editHandler(index) {
    let Employees = this.state.Employees;
    let Employee = Employees[index];

    this.setState({
      name: Employee.name,
      email: Employee.email,
      mobile: Employee.mobile,
      isEditable: true,
      isFormValid: true,
      empIndex: index
    })

    $('form#employee-form label').addClass('active');
  }
}