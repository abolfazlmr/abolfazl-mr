import React from "react";

const RowHistory = ({ children }) => {
  return (
    <div className="row">
      <h6>{children[0].props.children}</h6>
      <h6>{children[1].props.children}</h6>
      <p>{children[2].props.children}</p>
    </div>
  );
};

export default RowHistory;
