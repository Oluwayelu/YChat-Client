import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div>
      {user === "admin" && (
        <div>
          <hr />
          <p className="adminMessage">{ReactEmoji.emojify(text)}</p>
          <hr />
        </div>
      )}
      {isSentByCurrentUser ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundPrimary">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div
          className={`"messageContainer justifyStart" ${
            user === "admin" && "hidden"
          }`}
        >
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
