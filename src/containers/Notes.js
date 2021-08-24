import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_TODO } from "../store/actions";
import * as actionTypes from "../store/actions";

const Notes = () => {
  /* const notes = useSelector((state) => state.notes);
  const texts = useSelector((state) => state.text); */
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id,
  });
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? "strike" : ""}
          >
            {note.text}
          </li>
        ))}
      </ul>
      {/* <ul>
        {texts.map((text) => (
          <li key={text.id}>{text.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Notes;
