import React from 'react';
import $ from 'jquery';


export default class Member extends React.Component {

  constructor(props){
    super(props);

    this.state = ({
      
    })
  }

  render(){
    const {member} = this.props;
    return(
        <div className="Member-container">
          {
             member.map( (contact, index) => {

              return(
                <div key={index} className="member-row row m-0 p-2 border-bottom">
                  <div className="col-11 p-0" 
                  onClick={ (e) => {
                    e.preventDefault();
                    // contactChatClick(contact.mobile);
                  }}
                  >
                    {contact.name}
                  </div>
                  <div className="col-1 p-0"
                  onClick={ (e) => {
                    e.preventDefault();
                    // contactChatClick(e);
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
}