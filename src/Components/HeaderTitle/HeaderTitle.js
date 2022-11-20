import React from "react";
import "./HeaderTitle.scss";
function HeaderTitle({ title }) {
  return (
    <div className="HeaderTitle">
      <h1>{title}</h1>
    </div>
  );
}

export default HeaderTitle;
