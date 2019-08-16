import React from 'react';

import '../assets/component.css';

const SearchShowForm = (props) => {

  const {searchValue, tableShowChangeHandler, searchChangeHandler} = props

  return (
    <div className="row align-items-center border-bottom border-primary">
      <div className="col-lg-6 mb-lg-0 mb-3">
        <div className="show-enteries-form">
          <label>Show
          <select className="mdb-select md-form pl-2 m-0 mx-2"
            onChange={ (e) => {
              e.preventDefault();
              tableShowChangeHandler(e);
            }}
          >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="max">Max</option>
            </select>enteries
          </label>
        </div>
      </div>
      <div className="col-lg-6 mb-lg-0 mb-3">
        <div className="search-form d-flex justify-content-end">
        <label className="m-0 pt-1">Search :</label>
            <div className="md-form m-0 ml-2">
              <form>
                <input className="form-control" type="text" placeholder="Search" value={searchValue} aria-label="Search" 
                  onChange={ (e) => {
                    e.preventDefault();
                    searchChangeHandler(e);
                  }}
                />
              </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchShowForm;