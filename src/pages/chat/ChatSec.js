import React from 'react';
import $ from 'jquery';

import ChatMember from '../../component/chat/ChatMember';
import Chatting from '../../component/chat/Chatting';
import AddChat from './AddChat'; 


export default class ChatSec extends React.Component {

  constructor(props){
    super(props);

    this.contactChatClick = this.contactChatClick.bind(this);
    this.updateIsChatting = this.updateIsChatting.bind(this);
    this.updateIsTyping = this.updateIsTyping.bind(this);
    this.chatInputChangeHandler = this.chatInputChangeHandler.bind(this);



    this.state = ({
      isChatting: false,
      isTyping: false
    });
  }

  updateIsChatting(){
    this.setState({
      isChatting: false
    })
  }

  updateIsTyping(){
    this.setState({
      isTyping: true
    })
  }

  contactChatClick(mob){
    let mobile = mob;
    $('#chat-member.rightTranslate').addClass('go-right');

    setTimeout(() => {
      this.setState({
        isChatting: true
      })
      $('#chatting.leftTranslate').addClass('go-left')
    }, 500);
   
  }

  // chat handler
  chatInputChangeHandler(e){
    console.log(e)
   
  }

  render(){
    const{member}= this.props;

    return(
        <div className="chat-sec-container h-100">
        {
          this.state.isChatting ? 
          <div id="chatting" className="chatting leftTranslate h-100">
            <Chatting isTyping={this.state.isTyping} updateIsChatting={this.updateIsChatting} updateIsTyping={this.updateIsTyping} chatInputChangeHandler={this.chatInputChangeHandler} />
          </div>
          :
          <div id="chat-member" className="chat-member rightTranslate h-100">
            <ChatMember member={member} contactChatClick={this.contactChatClick} />
            <AddChat member={member}/>
          </div>
        }
        </div>
    )
  }
}