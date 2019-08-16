import React from 'react';
import $ from 'jquery';


import Member from './Member';
import Group from './Group';

export default class AddChat extends React.Component {

  constructor(props){
    super(props);
    this.goBackHandler = this.goBackHandler.bind(this);
    this.memberTypeClick = this.memberTypeClick.bind(this);

    this.state = ({
      goBack: true,
      isMember: true
    })
  }

  goBackHandler(){
    $('.chat-member-container').toggleClass('bottomToTop')
    setTimeout(() => {
      this.setState({
        goBack: !this.state.goBack
      })
      $('#logMemberContainer').toggleClass('go-top');
    }, 500);

  }

  memberTypeClick(e, type){
    $('.member-type li').removeClass('active');
    $(e.target).addClass('active');

    if(type == 'member'){
      this.setState({
        isMember: true
      })
    }
    else{
      this.setState({
        isMember: false
      })
    }
    
  }

  render(){

    const{member} = this.props;
    return(
        <div className="add-chat-container">
        {
          this.state.goBack ? 
          <div id="addChatbtn" className="add-chat-btn ">
            <button className="btn-floating pink white-text waves-effect waves-light hoverable"
            onClick={ (e) => {
              e.preventDefault();
              this.goBackHandler();
            }}><i className="fas fa-plus"></i></button>
          </div>
          :
          <div id="logMemberContainer" className="log-member-container white w-100 h-100 bottomToTop">
            <div className="log-member-header">
              <div className="search-box">
                <div className="md-form mt-0 mb-0">
                  <input className="form-control mb-0 px-3" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </div>
              <ul className="d-flex info-color list-unstyled mb-0 member-type white-text">
                <li className="p-2 active"
                  onClick={ (e) =>{
                    this.memberTypeClick(e, 'member')
                  }}>
                  Member</li>
                <li className="p-2"
                  onClick={ (e) =>{
                    this.memberTypeClick(e, 'group')
                  }}>
                  Group</li>
              </ul>
            </div>
            <div className="log-member-body">
              {
                this.state.isMember 
                  ? 
                  <Member member={member} />
                  :
                  <Group />
              }
            </div>
            <div className="add-chat-btn go-back-btn">
              <button className="btn-floating pink white-text waves-effect waves-light hoverable"
              onClick={ (e) => {
                e.preventDefault();
                this.goBackHandler();
              }}><i className="fas fa-angle-double-left"></i></button>
            </div>
          </div>
          }
        </div>
    )
  }
}