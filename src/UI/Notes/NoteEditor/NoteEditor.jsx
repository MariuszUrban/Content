import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import TitleTextField from "./TitleTextField";
import ContentTextField from "./ContentTextField";
import { useDispatch, useSelector } from "react-redux";
import { noteSelector, saveNote } from "../../../app/features/NotesSlice";
import { nanoid } from "nanoid";
import date from "date-and-time";

import "./_noteEditor.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "15px",
    border: "solid 1px #204361",
    "& > *": {
      margin: theme.spacing(1),
    },
    "& span": {
      color: "#204361",
    },
    "& input": {
      padding: "14px",
      height: "30px",
    },
  },
}));

const NoteEditor = () => {
  const classes = useStyles();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(noteSelector);

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleDiscardNote = () => {
    setNoteTitle("");
    setNoteText("");
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    const now = new Date();
    if (noteText.trim().length > 0) {
      setNoteTitle("");
      setNoteText("");
      dispatch(
        saveNote({
          title: noteTitle.trim().length > 0 ? noteTitle : "Untitled",
          text: noteText,
          date: date.format(now, "YYYY/MM/DD"),
          time: date.format(now, "hh:mm:ss"),
          note_id: nanoid(),
        })
      );
    }
  };

  return (
    <div className="note-editor-container">
      <form
        className="note-editor-form"
        noValidate
        autoComplete="off"
        onSubmit={handleSaveNote}
      >
        <TitleTextField
          className="note-editor-title"
          id="outlined-note-editor-title"
          label="Title"
          variant="outlined"
          value={noteTitle}
          onChange={handleTitleChange}
        />
        <ContentTextField
          className="note-editor-text"
          id="outlined-note-editor-text"
          label="Text"
          variant="outlined"
          multiline
          value={noteText}
          onChange={handleTextChange}
        />
        <ButtonGroup
          className="note-editor-btns"
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <div className={classes.root}>
            <Button
              className="note-editor-btn"
              startIcon={<ClearIcon />}
              onClick={handleDiscardNote}
            >
              Discard
            </Button>
            <Button
              className="note-editor-btn"
              startIcon={<SaveIcon />}
              onClick={handleSaveNote}
            >
              Save
            </Button>
          </div>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default NoteEditor;
