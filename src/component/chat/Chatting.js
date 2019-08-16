import React from 'react';

const Chatting = (props) => {

  // goBackHandler(){
  //   const {updateIsChatting} = props;
  //   updateIsChatting()
  // }

  const {isTyping,  chatInputChangeHandler} = props;
  return(
    <div className="chatting-container">
      <div id="talk-container">
        <div className="other chat">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="self chat">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="other chat">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="self chat">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>

      <div className="typing">
      {
        isTyping 
        ?
        <div className="border-info border-top typing-container">
          <div className="form-2 form-sm input-group m-0 md-form pl-0">
            <input className="form-control my-0 py-1 red-border" type="text" placeholder="Chat here" aria-label="Search" 
            onChange={ (e) => {
              chatInputChangeHandler(e);
            }}/>
            <div className="input-group-append c-pointer">
              <span className="border-0 info-color input-group-text rounded-0"><i className="far fa-paper-plane white-text"></i></span>
            </div>
          </div>
        </div>
        :
        <div className="border-info border-top typing-container">
          <div className="form-2 form-sm input-group m-0 md-form pl-0">
            <input className="form-control my-0 py-1 red-border" type="text" placeholder="Chat here" aria-label="Search" 
              onFocus={ () => {
                  props.updateIsTyping();
              }}
            />
            <div className="input-group-append c-pointer" onClick={ (e)=> {
              e.preventDefault();
              props.updateIsChatting()
            }}>
              <span className="border-0 info-color input-group-text rounded-0"><i className="fas fa-angle-double-left white-text"></i></span>
            </div>
          </div>
        </div>
      }
      </div>
    </div>
  )
}

export default Chatting;