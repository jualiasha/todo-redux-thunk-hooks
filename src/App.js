import React, { useEffect } from "react";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";
import "./App.css";
import { initializeNotes } from "./store/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
