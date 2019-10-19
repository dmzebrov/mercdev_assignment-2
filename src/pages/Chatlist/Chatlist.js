import React from 'react';
import './Chatlist.css';

import ChatlistHead from './ChatlistHead/ChatlistHead';
import ChatlistBody from './ChatlistBody/ChatlistBody';

class Chatlist extends React.Component {
  constructor(props) {
    super(props);

    this.searchChat = this.searchChat.bind(this);


  }

  searchChat() {
    console.log('search');
  }

  render() {
    return (
      <>
        <ChatlistHead searchChat={this.searchChat} />

        <ChatlistBody />
      </>
    )
  }
}

export default Chatlist;