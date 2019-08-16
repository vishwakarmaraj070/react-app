import React from 'react';
import $ from 'jquery';

import ChatSec from '../../pages/chat/ChatSec';
import AddChat from '../../pages/chat/AddChat';
import VideoSec from '../../pages/chat/VideoSec';
import MediaSec from '../../pages/chat/MediaSec';



export default class UserLog extends React.Component {

  constructor(props) {
    super(props);
    this.userNavHandler = this.userNavHandler.bind(this)

    this.state = ({
      videoSec: false,
      chatSec: true,
      mediaSec: false 
    })

    $(document).ready(function () {
      $('ul.chat-user-nav li').click(function (e) {
        $('ul.chat-user-nav li').removeClass('active');
        $(e.target).addClass('active');
      });

      $('.chat-app .search-box').click( () => {
        $('.chat-app .chat-header .search-input-box').addClass('open');
      })
      $('.Closebefore').click( () => {
        $('.chat-app .chat-header .search-input-box').removeClass('open');
      })
    });
  }

  userNavHandler(type){
    if(type == 'chat'){
     setTimeout(() => {
      this.setState({
        videoSec: false,
        chatSec: true,
        mediaSec: false
      })
      $('#ChatSec').addClass('go-left');
     }, 500);
        
      
    }
    else if(type == 'video'){
      setTimeout(() => {
        this.setState({
          videoSec: true,
          chatSec: false,
          mediaSec: false
        })
        $('#VideoSec').addClass('go-left');
       }, 500);
      
    }
    else{

      setTimeout(() => {
        this.setState({
          videoSec: false,
          chatSec: false,
          mediaSec: true
        })
        $('#MediaSec').addClass('go-left');
       }, 500);
     
    }
  }

  render() {
    const {member} = this.props;

    return (
      <div className="w-100 h-100">
        <div className="chat-header position-relative d-flex info-color-dark justify-content-between p-2 white-text">
          <div className="align-items-center d-flex profile-logo">
            <img className="profile" src={require('../../assets/images/default-profile.png')} alt="profile" />
            <p className="font-weight-bolder ml-3 user-name">Name</p>
          </div>
          <div className="search-input-box transition">
            <span className="Closebefore fas fa-times transition"></span>
            <div className="h-100 m-0 md-form mt-0">
              <input className="form-control m-0 px-3 white" type="text" placeholder="Search by Mobile" aria-label="Search" />
            </div>
          </div>
          <div className="align-items-center chat-menu d-flex">
            <div className="mr-3 search-box transition ">
              <i className="fas fa-search"></i>
            </div>
            <div className="menu-box transition">
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
        </div>
        <ul className="chat-user-nav d-flex info-color list-unstyled mb-0" >
          <li className="mx-auto active far fa-comment-dots"
           onClick={ (e) => {
            e.preventDefault();
            this.userNavHandler('chat');
          }}></li>
          <li className="mx-auto fas fa-video"
          onClick={ (e) => {
            e.preventDefault();
            this.userNavHandler('video');
          }}></li>
          <li className="mx-auto far fa-gem"
           onClick={ (e) => {
            e.preventDefault();
            this.userNavHandler('media');
          }}></li>
        </ul>
        <div className="chat-body">
          {
            this.state.chatSec 
            ?
            <div id="ChatSec " className="h-100">
              <ChatSec member={member}/>
            </div>
            :
            this.state.videoSec 
            ? 
            <div id="VideoSec" className="h-100 leftTranslate">
              <VideoSec member={member} />
              <AddChat member={member} />
            </div>
            :
            this.state.videoSec 
            ? 
            <div id="MediaSec" className="h-100 leftTranslate">
              <MediaSec />
            </div>
            : 
            ''
          }
        </div>
      </div>
    )
  }
}