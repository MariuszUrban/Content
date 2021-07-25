import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import TitleTextField from "./TitleTextField";
import ContentTextField from "./ContentTextField";
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

  return (
    <div className="note-editor-container">
      <form className="note-editor-form" noValidate autoComplete="off">
        <TitleTextField
          className="note-editor-title"
          id="outlined-note-editor-title"
          label="Title"
          variant="outlined"
        />
        <ContentTextField
          className="note-editor-text"
          id="outlined-note-editor-text"
          label="Text"
          variant="outlined"
        />
        <ButtonGroup
          className="note-editor-btns"
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <div className={classes.root}>
            <Button className="note-editor-btn" startIcon={<ClearIcon />}>
              Discard
            </Button>
            <Button className="note-editor-btn" startIcon={<SaveIcon />}>
              Save
            </Button>
          </div>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default NoteEditor;
