import React from "react";
import "./ChatCard.css";

import avaDummy from "files/avatar-dummy.jpg";
import HighlightText from "components/HighlightText/HighlightText";

function ChatCard({ chatData, searchValue }) {
  return (
    <div className="chat-card">
      <div className="chat-card__avatar-wrapper">
        <img className="chat-card__avatar" src={avaDummy} alt="avatar" />

        <div className="chat-card__online-status-dot"></div>
      </div>

      <div className="chat-card__chat-content">
        <div className="chat-card__title-date-wrapper">
          <h2 className="chat-card__title">
            <HighlightText highlightText={searchValue}>
              {chatData.title}
            </HighlightText>
          </h2>

          <p className="chat-card__date">11:20 AM</p>
        </div>

        <p className="chat-card__message">
          <HighlightText highlightText={searchValue}>
            {chatData.body}
          </HighlightText>
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
