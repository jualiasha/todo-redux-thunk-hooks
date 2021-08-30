import React from "react";
import * as actionTypes from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../store/reducers/reducer";

const NewNote = () => {
  /*  const notes = useSelector((state) => state);

  let i = notes.length; */
  const dispatch = useDispatch();

  const addTodo = async (event) => {
    event.preventDefault();
    const text = event.target.noteInput.value;
    /*   type: actionTypes.ADD_TODO, */
    /* id: i++, */
    /* text: text, */
    /* completed: false, */
    dispatch(createNote(text));
    event.target.noteInput.value = "";
  };

  return (
    <form
      /* onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.noteInput.value));
        event.target.noteInput.value = "";
      }} */
      onSubmit={addTodo}
    >
      <input type="text" name="noteInput" />
      <input type="submit" value="Add note" />
    </form>
  );
};

export default NewNote;
