import React from 'react';


const ChatMember = (props) => {

  const {member, contactChatClick} = props;

  return(
      <div className="chat-member-container">
      {
        member.map( (contact, index) => {

          return(
            <div key={index} className="member-row row m-0 p-2 border-bottom">
              <div className="col-11 p-0" 
              onClick={ (e) => {
                e.preventDefault();
                contactChatClick(contact.mobile);
              }}
              >
                {contact.name}
              </div>
              <div className="col-1 p-0"
              onClick={ (e) => {
                e.preventDefault();
                contactChatClick(e);
              }}>
                <img className="profile" src={require('../../assets/images/default-profile.png')} alt="profile" />
              </div>
            </div>
          )
        })

      }
      </div>
  )
}

export default ChatMember;