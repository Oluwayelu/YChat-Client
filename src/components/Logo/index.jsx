import React from "react";

import "./Logo.css";

const Logo = () => {
  return (
    <h1 className="title">
      <span className="colorPrimary">Y</span>Chat
      <span role="img" aria-label="emoji" className="colorPrimary">
        💬
      </span>
    </h1>
  );
};

export default Logo;
