import React from "react";

const MyHeader = ({ headText, leftChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
    </header>
  );
};

export default MyHeader;
