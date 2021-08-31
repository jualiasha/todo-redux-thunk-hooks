import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeOneNote, toggleOneNote } from "../store/actions";

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (event, id) => {
    event.stopPropagation();
    dispatch(removeOneNote(id));
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() =>
              dispatch(
                toggleOneNote(note.id, {
                  text: note.text,
                  completed: !note.completed,
                  id: note.id,
                })
              )
            }
            className={note.completed ? "completed" : ""}
          >
            {note.text}

            <button onClick={(event) => handleDelete(event, note.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
