import React from 'react';

import '../assets/pages.css';
import CalResult from '../component/CalResult';
import CalButtons from '../component/CalButtons';

export default class Calculator extends React.Component {
  constructor(props) {

    super(props);

    this.btnClickHandler = this.btnClickHandler.bind(this);
    this.calClearHandler = this.calClearHandler.bind(this);
    this.opratorHandler = this.opratorHandler.bind(this);

    this.state = {
      Caloutput: 'result',
      btnValue: '',
      isEqualeTo: false,
      isDefault: true,
      numberValue : '',
      opeCount : 0,
      firstNumber : '',
      secondNumber : '',
      operation : ''
    }
  }

  btnClickHandler(value) {
    let btnValue = this.state.btnValue;
      btnValue = btnValue + value;
    let numberValue = this.state.numberValue;
    numberValue = numberValue + value;
      this.setState({
        btnValue,
        isDefault: false,
        numberValue,
      });
  }

  calClearHandler(){
    this.setState({
      isDefault : true,
      isEqualeTo : false,
      btnValue : '',
      opeCount : 0
    })
  }

  opratorHandler(typeOpe){
    let btnValue = this.state.btnValue;
    let opeCount = this.state.opeCount;
    let numberValue = parseInt(this.state.numberValue);
    let firstNumber = parseInt(this.state.firstNumber);
    let secondNumber = parseInt(this.state.secondNumber)
    opeCount = opeCount + 1;

    if(opeCount == 1){
      firstNumber = numberValue
    }
    else {
      secondNumber = numberValue
      
      if(this.state.operation == '+'){
        firstNumber = firstNumber + secondNumber;
      }
      else if(this.state.operation == '-'){
        firstNumber = firstNumber - secondNumber;
      }
      else if(this.state.operation == '*'){
        firstNumber = firstNumber * secondNumber;
      }
      else if(this.state.operation == '/'){
        firstNumber = firstNumber / secondNumber;
      }
      else {
        console.log('result');
      }
    }

    let operation = typeOpe;
    this.setState({
      opeCount,
      numberValue : '',
      firstNumber,
      operation,
      secondNumber
    })
  }

  render() {

    return (
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="calculator-container border-danger border-bottom p-3 z-depth-1">
            <form id="calculator" className="z-depth-1">
              <CalResult isDefault={this.state.isDefault} operation={this.state.operation} numberValue={this.state.numberValue} opeCount={this.state.opeCount} firstNumber={this.state.firstNumber} isEqualeTo={this.state.isEqualeTo} btnValue={this.state.btnValue} Caloutput={this.state.Caloutput} />
              <CalButtons btnClickHandler={this.btnClickHandler}  calClearHandler={this.calClearHandler} opratorHandler={this.opratorHandler} />
            </form>
          </div>
        </div>
      </div>

    );
  }
}