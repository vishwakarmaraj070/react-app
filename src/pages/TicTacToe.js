import React from 'react';
import $ from 'jquery';


import '../assets/pages.css'


export default class TicTacToe extends React.Component {
  constructor(props) {

    super(props);
    this.btnClickHandler = this.btnClickHandler.bind(this);
    this.winChanceCount = this.winChanceCount.bind(this);

    this.state = ({
      btnText: 'X',
      clickCount: 0,
    });
  }

  btnClickHandler(e) {
    let target = e.target;
    let count = this.state.clickCount;
    let btText = this.state.btnText;

    count = count + 1;
    this.setState({
      clickCount: count
    })
    if (btText == "O") {
      this.setState({
        btnText: "X"
      })
    }
    else {
      this.setState({
        btnText: "O"
      })
    }

    $(target).html(this.state.btnText);
    $(target).attr('disabled', true);
  }

  winChanceCount(e) {
    let value = e.target.value;
    let target = e.target;
    let text = $(target).text();
    let count = this.state.clickCount;

    if (count < 7) {

      if (text == 'X' && (value == '1' || value == '3' || value == '7' || value == '9')) {
        console.log('x 3 chance')
      }
      else if(text == 'O' && (value == '1' || value == '3' || value == '7' || value == '9')){
        console.log('o 3 chance')
      }
    }
    else {
      console.log('match drow');
    }
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='1'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='2'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='3'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='4'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='5'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='6'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='7'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='8'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
          <div className="col-auto p-0">
            <button className="unique-color btn btn-md white-text tictacBtn"
              value='9'
              onClick={(e) => {
                e.preventDefault();
                this.btnClickHandler(e);
                this.winChanceCount(e);
              }}
            >
            </button>
          </div>
        </div>
      </div>
    );
  }
}