import React from "react";

const Skill = ({ children, data, percent }) => {
  return (
    <div className={`skill ${percent}`}>
      <div>{children}</div>
      <div>{data}%</div>
    </div>
  );
};

export default Skill;
