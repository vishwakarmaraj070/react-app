import React from 'react';
import $ from 'jquery';

import '../../assets/pages.css';
import '../../assets/component.css';
import AddUser from './AddUser';
import UserLog from './UserLog';


export default class ChatApp extends React.Component{

  constructor(props){
    super(props);
    
    this.updateIsOpen = this.updateIsOpen.bind(this);

    this.state = ({
      member:[
        {name: 'Raj', mobile: 9898989889, tagLine : 'Keep Smile'},
        {name: 'Abhi', mobile: 8598685475, tagLine : 'Keep Smile'},
        {name: 'Pandey', mobile: 8745875848, tagLine : 'Keep Smile'}
      ],
      isOpen: false
    })
  }

  updateIsOpen(open){
    $('#AddUser.rightTranslate').addClass('go-right');
    setTimeout(() => {
      this.setState({
        isOpen: open
      })

      $('#userlog.leftTranslate').addClass('go-left');
    }, 500)
  }

  render(){

    return(
      <div>
        <h4 className="mb-3 p-2 text-center unique-color-dark white-text h4-reponsive">
          Chat App
        </h4>
        <div className="flex-center">
          <div className="chat-container my-5 ">
            <div className="chat-app position-relative border border-info z-depth-1-half">
            {
               this.state.isOpen 
               ? 
               <div id="userlog" className="leftTranslate h-100">
                <UserLog member={this.state.member} />
               </div>
               : 
               <div id="AddUser" className="rightTranslate h-100">
                <AddUser updateIsOpen={this.updateIsOpen}/> 
               </div>
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
} 
