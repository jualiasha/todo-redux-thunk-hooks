import React from "react";
import * as actionTypes from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const NewNote = () => {
  const notes = useSelector((state) => state);

  let i = notes.length;
  const dispatch = useDispatch();

  const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    id: i++,
    text: text,
    completed: false,
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.noteInput.value));
        event.target.noteInput.value = "";
      }}
    >
      <input type="text" name="noteInput" />
      <input type="submit" value="Add note" />
    </form>
  );
};

export default NewNote;
