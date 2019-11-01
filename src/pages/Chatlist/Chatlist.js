import React from "react";

import api from "api";
import ChatlistHead from "./ChatlistHead/ChatlistHead";
import ChatlistBody from "./ChatlistBody/ChatlistBody";

class Chatlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.searchChat = this.searchChat.bind(this);
    this.getMessages = this.getMessages.bind(this);

    this.state = {
      searchValue: "",
      allMessages: [],
      displayedMessages: []
    };
  }

  componentDidMount() {
    this.getMessages();
  }

  async getMessages() {
    try {
      const messages = await api.getMessages();
      const displayedMessages = messages.map(message => {
        return {
          id: message.id,
          userId: message.userId,
          title: message.title,
          body: message.body
        };
      });

      this.setState({
        allMessages: messages,
        displayedMessages: displayedMessages
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleSearchValue(e) {
    this.setState(
      {
        searchValue: e.target.value
      },

      () => {
        if (this.state.searchValue.length > 1) {
          this.searchChat();
        } else {
          this.setState({
            displayedMessages: this.state.allMessages
          });
        }
      }
    );
  }

  searchChat(e = false) {
    if (e) {
      e.preventDefault();
    }

    function searchMessages(message) {
      let bodyIndexOf = message.body
        .toLowerCase()
        .indexOf(this.state.searchValue.toLowerCase());
      let titleIndexOf = message.title
        .toLowerCase()
        .indexOf(this.state.searchValue.toLowerCase());

      if (bodyIndexOf !== -1 || titleIndexOf !== -1) {
        return true;
      }

      return false;
    }

    const foundMessages = this.state.allMessages.filter(searchMessages, this);

    this.setState({
      displayedMessages: foundMessages
    });
  }

  render() {
    return (
      <>
        <ChatlistHead
          handleSearchValue={this.handleSearchValue}
          searchChat={this.searchChat}
        />

        <ChatlistBody
          chatlistData={this.state.displayedMessages}
          searchValue={this.state.searchValue}
        />
      </>
    );
  }
}

export default Chatlist;
