import { getAll, createNew, removeNote } from "../services/notes";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const INIT_NOTES = "INIT_NOTES";
export const REMOVE_NOTES = "REMOVE_NOTES";

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    dispatch({
      type: INIT_NOTES,
      data: notes,
    });
  };
};

export const createNote = (text) => {
  return async (dispatch) => {
    const newNote = await createNew(text);
    dispatch({
      type: ADD_TODO,
      data: newNote,
    });
  };
};

export const removeOneNote = (id) => {
  return async (dispatch) => {
    await removeNote(id);
    const notes = await getAll();
    dispatch({
      type: REMOVE_NOTES,
      data: notes,
    });
  };
};
