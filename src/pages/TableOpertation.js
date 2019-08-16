import React from 'react';
import $ from 'jquery';

import '../assets/pages.css';

import SearchShowForm from '../component/SearchShowForm';
import TableOperationHeader from '../component/TableOperationHeader';
import TableOperationBody from '../component/TableOperationBody';
import TableOperationPagination from '../component/TableOperationPagination';

export default class TableOpertation extends React.Component {

  constructor(props) {
    super(props);
    this.tHeadHandler = this.tHeadHandler.bind(this);
    this.tableEditHandler = this.tableEditHandler.bind(this);
    this.tableDeleteHandler = this.tableDeleteHandler.bind(this);
    this.tableOperationData = this.tableOperationData.bind(this);
    this.tableSaveHandler = this.tableSaveHandler.bind(this);
    this.onEditableChangeHandler = this.onEditableChangeHandler.bind(this);
    this.yesDeleteClick = this.yesDeleteClick.bind(this);
    this.noDeleteClick = this.noDeleteClick.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.onNextPageClick = this.onNextPageClick.bind(this);
    this.onPrevPageClick = this.onPrevPageClick.bind(this);
    this.tableShowChangeHandler = this.tableShowChangeHandler.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.state = ({
      tableOperationData: [],
      iseditable: false,
      editableEmail: '',
      name: '',
      email: '',
      mobile: '',
      isdeleteClick: false,
      Index: null,
      activePage: 1,
      showEntries: 5,
      pageNo: 1,
      searchValue: '',
      indexSearch: ''
    })

  }

  componentDidMount(){
    this.tableOperationData();
  }

  // show entries

  tableShowChangeHandler(e){
    let value = e.target.value;
    this.setState({
      showEntries : value
    })
  }

  searchChangeHandler(e){
    let {tableOperationData} = this.state;

    this.setState({
      searchValue: e.target.value
    })

    var value = e.target.value;
    let names = tableOperationData.map((user) => {
      return user.name
    });
    let nameIndx = [];
    names.map( (name, index) => {
        var indx = name.indexOf(value);
        if(indx >=0){
         nameIndx.push(index);
        }
     })

    let emails = tableOperationData.map(user => {
      return user.email
    });
    let emailIndx = [];
    emails.map( (email, index) => {
        var indx = email.indexOf(value);
        if(indx >=0){
         nameIndx.push(index);
        }
     })

    let phones = tableOperationData.map(user => {
      return user.phone
    })
    let phoneIndx = [];
    phones.map( (phone, index) => {
        var indx = phone.indexOf(value);
        if(indx >=0){
         nameIndx.push(index);
        }
     })

     if(nameIndx.length > '0') {
        this.setState({
          indexSearch : nameIndx
        })
        
     }else if(emailIndx.length > '0'){
      this.setState({
        indexSearch : emailIndx
      })
     }
     else if(phoneIndx.length > '0'){
      this.setState({
        indexSearch : phoneIndx
      })
     }
    
    }

  // table header

  tHeadHandler(e, sortType){
    let target = $(e.target);
    $(target).toggleClass('desBefore');
    let {tableOperationData} = this.state;
    
    let name = tableOperationData.map((user) => {
        return user.name
    });

    let email = tableOperationData.map(user => {
      return user.email
    });

    let phone = tableOperationData.map(user => {
      return user.phone
    });

    if(sortType == 'name'){
      let nameArray = tableOperationData.map((user) => {
        return user.name
      });
      var sorVal = nameArray.sort();
      var newSort = null;
      tableOperationData.map((user, index) => {
        newSort = name.indexOf(sorVal[index]);
        tableOperationData.splice(index, 1,tableOperationData[newSort]);
      })
      this.setState({
        tableOperationData
      });
    }

    if(sortType == 'email'){
      let emailArray = tableOperationData.map((user) => {
        return user.email
      });
      var sorVal = emailArray.sort();
      var newSort = null;
      tableOperationData.map((user, index) => {
        newSort = email.indexOf(sorVal[index]);
        tableOperationData.splice(index, 1,tableOperationData[newSort]);
      })
      this.setState({
        tableOperationData
      });
    }
  }

  // table body

  tableOperationData(){
    fetch('https://randomuser.me/api/?results=15&inc=name,email,phone,id,nat&noinfo')
      .then(response => response.json())
      .then(responseJSON => responseJSON.results.map( user => ({
        name: `${user.name.first} ${user.name.last}`,
        email : `${user.email}`,
        phone : `${user.phone}`,
        id: `${user.id.name}`
      })))
      .then( tableOperationData => this.setState({
        tableOperationData
      }))
      .catch(error => console.log(`loading failed : ${ error}`));
  }


  tableEditHandler(e, index){
    let{ tableOperationData } = this.state;
    let editable = tableOperationData[index];
    let editableEmail = editable.email;
    this.setState({
      iseditable: true,
      editableEmail,
      name : editable.name,
      email: editableEmail,
      mobile: editable.phone
    })
  }

  onEditableChangeHandler(e, index, valueFor){
    let{ tableOperationData } = this.state;
    let value = e.target.value;
    let vlFor = valueFor;
    let inx = index;
    if(vlFor == 'name'){
      this.setState({
        name: value

      })
    }
    else if(vlFor == 'email'){
      this.setState({
        email: value
      })
    }

    else if(vlFor == 'phone'){
      this.setState({
        mobile: value
      })
    }
  }

  tableSaveHandler(e, index){
    let {tableOperationData} = this.state;
    tableOperationData.splice(index, 1, {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.mobile
    })
    
    this.setState({
      editableEmail: '',
      tableOperationData
    })
  }

  tableDeleteHandler(indx){
    $('.delete-conform').addClass('open');
    this.setState({
      index: indx
    })
  }

  deleteRow(index){
    let {tableOperationData} = this.state;
      tableOperationData.splice(index, 1)
      this.setState({
        tableOperationData,
        isDeleteClick: false,
      })
      $('.delete-conform').removeClass('open');
  }

  yesDeleteClick(){
    this.setState({
      isDeleteClick: true
    })
    this.deleteRow(this.state.index);
  }

  noDeleteClick(){
    $('.delete-conform').removeClass('open');
  }

  // pagination 

  onNextPageClick(n){
    this.setState({
      activePage: this.state.activePage + n,
      pageNo: this.state.pageNo + n
    })
  }
  onPrevPageClick(n){
    this.setState({
      activePage: this.state.activePage - n,
      pageNo: this.state.pageNo - n
    })
  }

  onPageClick(n){
    this.setState({
      activePage: n,
      pageNo: n
    })
  }

  render() {

    return (

      <div className="container">
        <div className="row m-0">
          <div className="col">
            <div className="search-show-form">
              <SearchShowForm searchValue={this.state.searchValue} tableShowChangeHandler={this.tableShowChangeHandler} searchChangeHandler={this.searchChangeHandler} />
            </div>
          </div>
        </div>
        <div className="row m-0 mt-2 position-relative">
          <table className="opertation-table table table-striped">
            <TableOperationHeader tHeadHandler={this.tHeadHandler} />
            <TableOperationBody indexSearch={this.state.indexSearch} pageNo={this.state.pageNo} showEntries={this.state.showEntries} mobile={this.state.mobile} email={this.state.email} name={this.state.name} editableEmail={this.state.editableEmail} tableOperationData={this.state.tableOperationData} tableEditHandler={this.tableEditHandler} tableDeleteHandler={this.tableDeleteHandler} tableSaveHandler={this.tableSaveHandler} onEditableChangeHandler={this.onEditableChangeHandler} yesDeleteClick={this.yesDeleteClick} noDeleteClick={this.noDeleteClick}  />
          </table>
        </div>
        <div className="row m-0">
          <div className="col">
            <div className="table-operation-pagination">
              <TableOperationPagination showEntries={this.state.showEntries} activePage={this.state.activePage} tableOperationData={this.state.tableOperationData} onNextPageClick={this.onNextPageClick} onPrevPageClick={this.onPrevPageClick} onPageClick={this.onPageClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}


