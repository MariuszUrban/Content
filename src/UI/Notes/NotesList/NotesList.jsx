import React from "react";
import NoteSearch from "../NoteSearch/NoteSearch";
import NoteListItem from "../NoteListIem/NoteListItem";
import "./_notesList.scss";

const NotesList = () => {
  return (
    <div className="notes-list-container">
      <div className="note-search-wrapper">
        <NoteSearch />
      </div>
      <div className="notes-list-wrapper">
        <ul className="notes-list">
          <li className="notes-list-item">
            <NoteListItem />
          </li>
          <li className="notes-list-item">
            <NoteListItem />
          </li>
          <li className="notes-list-item">
            <NoteListItem />
          </li>
          <li className="notes-list-item">
            <NoteListItem />
          </li>
          <li className="notes-list-item">
            <NoteListItem />
          </li>
          <li className="notes-list-item">
            <NoteListItem />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotesList;
