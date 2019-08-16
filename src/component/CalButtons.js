import React from 'react';

import '../assets/component.css';

const CalButtons = (props) => {

  const { btnClickHandler, calClearHandler, opratorHandler } = props;
  return (
    <div className="cal-buttons px-2 p-y-1">
      <div className="btn-row">
        <button
          value="1"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          1
          </button>
        <button
          value="2"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          2
          </button>
        <button
          value="3"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          3
          </button>
        <button
          value="/"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
            opratorHandler('/');
          }}
        >
          /
          </button>
      </div>

      <div className="btn-row">
        <button
          value="4"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          4
          </button>
        <button
          value="5"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          5
          </button>
        <button
          value="6"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          6
          </button>
        <button
          value="*"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
            opratorHandler('*');
          }}
        >
          *
          </button>
      </div>

      <div className="btn-row">
        <button
          value="7"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          7
          </button>
        <button
          value="8"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          8
          </button>
        <button
          value="9"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          9
          </button>
        <button
          value="-"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
            opratorHandler('-');
          }}
        >
          -
          </button>
      </div>

      <div className="btn-row">
        <button
          value="0"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
          }}
        >
          0
          </button>
        <button
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            opratorHandler('');
          }}
        >
          =
          </button>
        <button
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            calClearHandler()
          }}
        >
          c
          </button>
        <button
          value="+"
          className="btn btn-md btn-default"
          onClick={(e) => {
            e.preventDefault();
            btnClickHandler(e.target.value);
            opratorHandler('+');
          }}
        >
          +
          </button>
      </div>

    </div>
  );
}

export default CalButtons;