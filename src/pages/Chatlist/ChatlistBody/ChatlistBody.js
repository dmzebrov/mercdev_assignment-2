import React from "react";
import "./ChatlistBody.css";

import ChatCard from "pages/Chatlist/ChatCard/ChatCard";

function ChatlistBody({ chatlistData, searchValue }) {
  let chatlist = <h1>Messages not found</h1>;

  if (chatlistData.length > 0) {
    chatlist = chatlistData.map(chatData => {
      return (
        <ChatCard
          key={chatData.id}
          chatData={chatData}
          searchValue={searchValue}
        ></ChatCard>
      );
    });
  }

  return (
    <div className="chatlist-body">
      <div className="chatlist-body__content">{chatlist}</div>
    </div>
  );
}

export default ChatlistBody;
