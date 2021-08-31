import React, { useEffect } from "react";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";
import "./App.css";
import { initializeNotes } from "./store/actions";
import { useDispatch } from "react-redux";
import Header from "./containers/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <NewNote />
        <Notes />
      </main>
    </>
  );
};

export default App;
