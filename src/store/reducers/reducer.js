import * as actionTypes from "../actions";
import noteServices from "../../services/notes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;
    case actionTypes.ADD_TODO:
      return [...state, action.data];
    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find((n) => n.id === action.id);
      const changeNote = {
        ...noteToChange,
        completed: !noteToChange.completed,
      };
      return state.map((note) => (note.id !== action.id ? note : changeNote));

    /* [
        ...state,
        {
          id: action.id + 1,
          text: action.text,
          completed: action.completed,
        },
      ]; */
    default:
      return state;
  }
};

/* const initialState = {
  notes: [{ id: 1, text: "something notes", completed: false }],
  text: [{ id: 1, text: "something text", completed: false }],
}; */

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteServices.getAll();
    dispatch({
      type: actionTypes.INIT_NOTES,
      data: notes,
    });
  };
};

export const createNote = (text) => {
  return async (dispatch) => {
    const newNote = await noteServices.createNew(text);
    dispatch({
      type: actionTypes.ADD_TODO,
      data: newNote,
    });
  };
};

export default reducer;
