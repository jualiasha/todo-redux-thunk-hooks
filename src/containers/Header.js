import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const notes = useSelector((state) => state);
  return (
    <header>
      <h1>Notes to myself</h1>
      <p>
        I have currently <span>{notes.length}</span> notes
      </p>
    </header>
  );
};

export default Header;
