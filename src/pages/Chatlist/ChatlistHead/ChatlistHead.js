import React from "react";
import "./ChatlistHead.css";

// import chatlistBackgroundImage from "files/pic-circles.svg";
import NotificationBadge from "components/NotificationBadge/NotificationBadge";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function ChatlistHead({ searchChat }) {
  return (
    <div className="chatlist-head">
      <div className="chatlist__background-wrapper">
        {/* <img
          alt="Circles"
          src={chatlistBackgroundImage}
          className="chatlist__background-image"
        /> */}
      </div>

      <div className="chatlist-head__content">
        <div className="chatlist-head__title-notification-badge-container">
          <h1 className="chatlist-head__title">Messages</h1>

          <NotificationBadge>137</NotificationBadge>
        </div>

        <div className="chatlist-head__search-container">
          <Input handleChange={searchChat} placeholder="Search" className="chatlist-head__search-input" />

          <Button onClick={searchChat} className="chatlist-head__search-button">
            <svg className="chatlist-head__search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill-rule="nonzero" d="M8 1a7 7 0 0 1 5.452 11.391l5.328 5.329a.75.75 0 0 1-1.06 1.06l-5.329-5.328A7 7 0 1 1 8 1zm0 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatlistHead;
