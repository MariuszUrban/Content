import React from "react";
import NoteListItem from "../NoteListIem/NoteListItem";

import "./_notesList.scss";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list-container">
      <div className="notes-list-wrapper">
        {notes.length > 0 ? (
          <ul className="notes-list">
            {notes.map(({ date, id, text, title }) => (
              <li className="notes-list-item" key={id}>
                <NoteListItem
                  title={title}
                  text={text}
                  date={date}
                  image
                  id={id}
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
