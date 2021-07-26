import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, noteSelector } from "../../../app/features/NotesSlice";
import "./_noteListItem.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  noteBtn: {
    color: "#204361",
  },
  input: {
    display: "none",
  },
}));

const NoteListItem = ({ title, text, id, date }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(noteSelector);

  const handleDeleteNote = () => {
    const newNotes = state.notes.filter((note) => note.id !== id);
    console.log("🚀 ~ handleDeleteNote ~ newNotes", newNotes);

    dispatch(deleteNote(newNotes));
  };

  return (
    <div className="note-list-item-container" key={id}>
      <div className="note-title-bar">
        <div className="note-title-wrapper">
          <h1 className="note-title">{title}</h1>
        </div>
        <div className="note-date-wrapper">
          <p className="note-date">{date}</p>
        </div>
      </div>
      <div className="note-content-bar">
        <div
          className="note-photo"
          style={{
            backgroundImage: `url(${"https://www.artic.edu/iiif/2/6a2d2716-2d5d-2ef9-88c5-39a30f769cad/full/600,/0/default.jpg"})`,
          }}
        ></div>
        <p className="note-note">{text}</p>
      </div>
      <div className="note-btns-bar">
        <IconButton onClick={handleDeleteNote}>
          <DeleteOutlineIcon className={classes.noteBtn} />
        </IconButton>
        <IconButton>
          <EditIcon className={classes.noteBtn} />
        </IconButton>
      </div>
    </div>
  );
};

export default NoteListItem;
