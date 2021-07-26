import React, { useState, useEffect } from "react";
import { noteSelector, loadNotes } from "../../app/features/NotesSlice";
import { useSelector, useDispatch } from "react-redux";
import NoteEditor from "./NoteEditor/NoteEditor";
import NoteView from "./NoteView/NoteView";
import NotesList from "./NotesList/NotesList";
import NoteSearch from "./NoteSearch/NoteSearch";
import "./_notes.scss";

const Notes = () => {
  const state = useSelector(noteSelector);
  const dispatch = useDispatch();
  const { notes } = state;
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNotes) {
      dispatch(loadNotes(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes-conatiner">
      <div className="note-edit-wrapper">
        <NoteEditor />
        {/* <NoteView /> */}
      </div>
      <div className="note-list-wrapper">
        <div className="note-search-wrapper">
          <NoteSearch value={searchText} handleSearchNote={setSearchText} />
        </div>
        <NotesList
          notes={notes.filter(
            (note) =>
              note.text.toLowerCase().includes(searchText) ||
              note.title.toLowerCase().includes(searchText)
          )}
        />
      </div>
    </div>
  );
};

export default Notes;
