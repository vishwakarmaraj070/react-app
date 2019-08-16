import React from 'react';

import '../assets/pages.css';
import ChatApp from './chat/ChatApp';

export default class Gallery extends React.Component {

  render() {

    return (
      <div className="gallery">
      {/* Chap App */}
        <h4 className="mb-3 p-2 text-center unique-color-dark white-text h4-reponsive">
          Chat App
        </h4>
         <ChatApp />
      </div>
    );
  }
}