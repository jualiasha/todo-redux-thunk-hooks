import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../store/actions";
import { removeOneNote } from "../store/actions";

const Notes = () => {
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
            <button onClick={() => dispatch(removeOneNote(note.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
