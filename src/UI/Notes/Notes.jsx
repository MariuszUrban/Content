import React from "react";
import NoteEditor from "./NoteEditor/NoteEditor";
import NoteView from "./NoteView/NoteView";
import NotesList from "./NotesList/NotesList";
import "./_notes.scss";

const Notes = () => {
  return (
    <div className="notes-conatiner">
      <div className="note-edit-wrapper">
        {/* <NoteEditor /> */}
        <NoteView />
      </div>
      <div className="note-list-wrapper">
        <NotesList />
      </div>
    </div>
  );
};

export default Notes;
