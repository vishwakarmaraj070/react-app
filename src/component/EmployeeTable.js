import React from 'react';
import '../assets/component.css';

const EmployeeTable = (props) => {

  const { isEditable, Employees,  deleteHandler, editHandler } = props;

  return (
    <div className="EmployeeTable">
      <table className="table table-striped">
        <thead>
          <tr className="text-uppercase white-text unique-color-dark">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Employees.map((emp, index) => {
              return (
                <tr key={index} >
                  <td>{index + 1}</td>
                  <td> {emp.name} </td>
                  <td> {emp.email} </td>
                  <td> {emp.mobile} </td>
                  <td className="d-flex p-1"> 
                    <button
                      onClick={ (e) => {
                        e.preventDefault();
                        editHandler(index);
                      }} 
                      className="btn btn-sm btn-outline-danger waves-effect waves-dark">
                        Edit
                      </button>
                    <button
                      onClick={ (e) => {
                        e.preventDefault();
                        deleteHandler(index);
                      }}
                      className="btn btn-sm btn-outline-danger waves-effect waves-dark">Delete</button>
                   </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;

