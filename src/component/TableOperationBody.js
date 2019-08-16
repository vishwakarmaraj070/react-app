import React from 'react';

import '../assets/component.css';

const TableOperationBody = (props) => {

  const { indexSearch, showEntries, pageNo, email, mobile, name, editableEmail, tableOperationData, tableEditHandler, tableDeleteHandler, tableSaveHandler, onEditableChangeHandler, yesDeleteClick, noDeleteClick } = props;

  return (
    <tbody className="position-relative">

      {
        indexSearch == 0 ?
          tableOperationData.length > 0 ?
            tableOperationData.map((user, index) => {
              if (index < showEntries * pageNo) {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td
                      className=
                      {
                        editableEmail.length > 0 && user.email == editableEmail ? 'py-2' : ''
                      }
                    >
                      {
                        editableEmail.length > 0 && user.email == editableEmail ? <div className="md-form m-0">
                          <input type="text" value={name} className="form-control mb-0"
                            onChange={(e) => {
                              e.preventDefault();
                              onEditableChangeHandler(e, index, 'name');
                            }}
                          /></div> : user.name
                      }
                    </td>

                    <td
                      className=
                      {
                        editableEmail.length > 0 && user.email == editableEmail ? 'py-2' : ''
                      }
                    >
                      {
                        editableEmail.length > 0 && user.email == editableEmail ? <div className="md-form m-0">
                          <input type="text" value={email} className="form-control mb-0"
                            onChange={(e) => {
                              e.preventDefault();
                              onEditableChangeHandler(e, index, 'email');
                            }}
                          /></div> : user.email
                      }
                    </td>

                    <td
                      className=
                      {
                        editableEmail.length > 0 && user.email == editableEmail ? 'py-2' : ''
                      }
                    >
                      {
                        editableEmail.length > 0 && user.email == editableEmail ? <div className="md-form m-0">
                          <input type="text" value={mobile} className="form-control mb-0"
                            onChange={(e) => {
                              e.preventDefault();
                              onEditableChangeHandler(e, index, 'phone');
                            }}
                          /></div> : user.phone
                      }   </td>
                    <td className="d-flex flex-flow p-0 pt-1 justify-content-end">
                      <button className="btn btn-sm btn-info waves-effect waves-light"
                        onClick={(e) => {
                          e.preventDefault();
                          editableEmail.length > 0 && user.email == editableEmail ? tableSaveHandler(e, index) : tableEditHandler(e, index);
                        }}
                      >{editableEmail.length > 0 && user.email == editableEmail ? 'Save' : 'Edit'}</button>
                      <button className="btn btn-sm btn-info waves-effect waves-light"
                        onClick={(e) => {
                          e.preventDefault();
                          tableDeleteHandler(index)
                        }}
                      >Delete</button>
                    </td>
                  </tr>
                )
              }
            })
            : <tr>
              <td>No User </td>
            </tr>
          :
          indexSearch.map( (val, index) => {
            var user = tableOperationData[val];
              return (
                <tr key={index}>
        <td>{user.id}</td>
        <td
          className=
          {
            editableEmail.length > 0 && user.email == editableEmail ? 'py-2' : ''
          }
        >
          {
            editableEmail.length > 0 && user.email == editableEmail ? <div className="md-form m-0">
              <input type="text" value={name} className="form-control mb-0"
                onChange={(e) => {
                  e.preventDefault();
                  onEditableChangeHandler(e, index, 'name');
                }}
              /></div> : user.name
          }
        </td>

        <td
          className=
          {
            editableEmail.length > 0 && user.email == editableEmail ? 'py-2' : ''
          }
        >
          {
            editableEmail.length > 0 && user.email == editableEmail ? <div className="md-form m-0">
              <input type="text" value={email} className="form-control mb-0"
                onChange={(e) => {
                  e.preventDefault();
                  onEditableChangeHandler(e, index, 'email');
                }}
              /></div> : user.email
          }
        </td>

        <td
          className=
          {
            editableEmail.length > 0 && user.email == editableEmail ? 'py-2' : ''
          }
        >
          {
            editableEmail.length > 0 && user.email == editableEmail ? <div className="md-form m-0">
              <input type="text" value={mobile} className="form-control mb-0"
                onChange={(e) => {
                  e.preventDefault();
                  onEditableChangeHandler(e, index, 'phone');
                }}
              /></div> : user.phone
          }   </td>
        <td className="d-flex flex-flow p-0 pt-1 justify-content-end">
          <button className="btn btn-sm btn-info waves-effect waves-light"
            onClick={(e) => {
              e.preventDefault();
              editableEmail.length > 0 && user.email == editableEmail ? tableSaveHandler(e, index) : tableEditHandler(e, index);
            }}
          >{editableEmail.length > 0 && user.email == editableEmail ? 'Save' : 'Edit'}</button>
          <button className="btn btn-sm btn-info waves-effect waves-light"
            onClick={(e) => {
              e.preventDefault();
              tableDeleteHandler(index)
            }}
          >Delete</button>
        </td>
      </tr>
    )
  })
}

      <div className="delete-conform flex-center">
        <div className="delete-body d-flex alige-items-center flex-flow">
          <p className="mb-0 mr-4">Are you sure to delete</p>
          <button className="btn btn-sm btn-danger waves-effect waves-light"
            onClick={(e) => {
              e.preventDefault();
              yesDeleteClick();
            }}
          >Yes</button>
          <button className="btn btn-sm btn-primary waves-effect waves-light"
            onClick={(e) => {
              e.preventDefault();
              noDeleteClick();
            }}
          >No</button>
        </div>
      </div>
    </tbody>
  );
}

export default TableOperationBody;