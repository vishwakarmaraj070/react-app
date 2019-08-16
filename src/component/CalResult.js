import React from 'react';

import '../assets/component.css';

const CalResult = (props) => {

  const {isDefault, Caloutput, btnValue, operation, numberValue, opeCount, firstNumber, isEqualeTo} = props;
  return (
    <div className="cal-result unique-color-dark white-text px-3 py-1 text-right">
      <strong className="h3-responsive font-weight-bold">
      {
        isDefault ? '0' :
        isEqualeTo ? Caloutput : opeCount > 1 ? firstNumber + '' + operation + '' + numberValue : btnValue
      }
      </strong>
    </div>
  );
}

export default CalResult;