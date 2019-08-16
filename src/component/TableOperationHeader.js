import React from 'react';

import '../assets/component.css';

const TableOperationHeader = (props) => {

  const {tHeadHandler} = props;
  return (
    <thead className="thead unique-color white-text">
        <tr>
          <th  className="actth text-left"
            onClick={ (e) => {
              e.preventDefault();
              tHeadHandler(e, 'id');
            }}
          >Id</th>
          <th
            onClick={ (e) => {
              e.preventDefault();
              tHeadHandler(e, 'name');
            }}
          >Name </th>
          <th
            onClick={ (e) => {
              e.preventDefault();
              tHeadHandler(e, 'email');
            }}
          >Email </th>
          <th
            onClick={ (e) => {
              e.preventDefault();
              tHeadHandler(e, 'phone');
            }}
          >Mobile </th>
          <th className="actth"
            onClick={ (e) => {
              e.preventDefault();
              tHeadHandler(e, 'action');
            }}
          >Action </th>
        </tr>
    </thead>
  );
}

export default TableOperationHeader;