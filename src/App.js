import React from "react";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";
import "./App.css";

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
