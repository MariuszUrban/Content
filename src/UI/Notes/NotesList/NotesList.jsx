import React from "react";
import NoteListItem from "../NoteListIem/NoteListItem";

import "./_notesList.scss";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list-container">
      <div className="notes-list-wrapper">
        {notes.length > 0 ? (
          <ul className="notes-list">
            {notes.map(({ date, note_id, text, title, image }) => (
              <li className="notes-list-item" key={note_id}>
                <NoteListItem
                  title={title}
                  text={text}
                  date={date}
                  image={image}
                  id={note_id}
                />
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="expecting">Expecting some of your toughts</h1>
        )}
      </div>
    </div>
  );
};

export default NotesList;
