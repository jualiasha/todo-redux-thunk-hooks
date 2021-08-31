import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../store/actions";
import { removeOneNote, toggleOneNote } from "../store/actions";

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
            onClick={() => dispatch(toggleOneNote(note.id, note.completed))}
            className={note.completed ? "completed" : ""}
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
