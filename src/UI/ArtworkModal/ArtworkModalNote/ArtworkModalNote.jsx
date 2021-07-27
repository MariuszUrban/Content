import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch, useSelector } from "react-redux";
import { noteSelector, saveNote } from "../../../app/features/NotesSlice.js";
import { nanoid } from "nanoid";
import date from "date-and-time";
import "./_artworkModalNote.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80%",
    paddingBottom: "40px",
    "& label": {
      color: "#fff",
    },
    "& .MuiInputBase-root": {
      backgroundColor: "rgb(148 185 233 / 33%)",
      height: "100%",
    },
    "& .MuiInputBase-input": {
      height: "90% !important",
      color: "#fff",
      fontDize: "1.25rem",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#fff",
    },
  },
  buttonModal: {
    backgroundColor: "#316694",
    "& .MuiButton-containedSizeLarge": {
      backgroundColor: "#316694",
    },
  },
}));

const ArtworkModalNote = ({ id, image, title, artist }) => {
  const classes = useStyles();
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(noteSelector);
  const { notes } = state;

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    const now = new Date();
    if (noteText.trim().length > 0) {
      setNoteText("");
      dispatch(
        saveNote({
          title: title,
          text: noteText,
          date: date.format(now, "YYYY/MM/DD"),
          time: date.format(now, "hh:mm:ss"),
          note_id: nanoid(),
          image: image,
          artist,
        })
      );
    }
  };

  return (
    <div className="artwork-modal-note-container">
      <form noValidate autoComplete="off">
        <TextField
          multiline
          className={classes.root}
          id="filled-basic"
          label="Quick note"
          variant="filled"
          onChange={handleTextChange}
          value={noteText}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.buttonModal}
          startIcon={<SaveIcon />}
          onClick={handleSaveNote}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default ArtworkModalNote;
