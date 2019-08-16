import React from 'react';

import '../assets/component.css';

const TableOperationPagination = (props) => {


  const {showEntries, activePage, tableOperationData, onNextPageClick, onPrevPageClick, onPageClick} = props;

  const pageCount = pagesCount(tableOperationData.length, showEntries);
  return (
    <div className="row align-items-center">
      <div className="col-md-6 mb-md-0 mb-0">
        <label>{`Showing ${tableOperationData.length > 0 ? showEntries : 0} to ${tableOperationData.length > 0 ? activePage : 0} of ${pageCount.length} entries`}</label>
      </div>
      <div className="col-md-6 mb-md-0 mb-0">
        <nav className=" d-flex justify-content-end" aria-label="Page navigation example">
          <ul className="pagination pg-blue mb-0 text-right">
            <li className={`page-item mb-0 ${activePage == 1 ? 'disabled' : ''}`}
               onClick={ (e) => {
                e.preventDefault(e);
                onPrevPageClick(1)
              }}
            ><a className="page-link waves-effect waves-dark" tabIndex="-1">Previous</a></li>
            {

              pageCount.map( (page, index) => {
                return (
                  <li key={index} className={`page-item mb-0 ${index == activePage - 1 ? 'active' : ''}`}><a className="page-link waves-effect waves-dark"
                  onClick={ (e) => {
                    e.preventDefault(e);
                    onPageClick(index + 1)
                  }}
                  >{index + 1}</a></li>
                )
              })
            }
            <li className={`page-item mb-0  ${pageCount.length <= 1 ? 'disabled': activePage == pageCount.length ? 'disabled' : ''}`}><a className="page-link waves-effect waves-dark" tabIndex="+1"
              onClick={ (e) => {
                e.preventDefault(e);
                onNextPageClick(1)
              }}
            >Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function pagesCount(length, devider){
  let reminder = length % devider;
  let pageCount = 0;
  let pageCountArray = [];
  if(reminder > 0){
    pageCount = length / devider + 1;
  }
  else {
    pageCount = length / devider;
  }
  for(let i = 1; i <= pageCount; i++){
    pageCountArray.push(i);
  }
  return pageCountArray;
}

export default TableOperationPagination;