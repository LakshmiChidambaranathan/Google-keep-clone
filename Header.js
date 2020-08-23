import React from "react";
import "./Header.css";
import HighlightIcon from "@material-ui/icons/Highlight";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <HighlightIcon />
        Keep
      </h1>
    </div>
  );
};

export default Header;
