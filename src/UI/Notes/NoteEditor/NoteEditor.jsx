import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import SaveIcon from "@material-ui/icons/Save";
import TitleTextField from "./TitleTextField";
import ContentTextField from "./ContentTextField";
import "./_noteEditor.scss";

const NoteEditor = () => {
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
          <Button className="note-editor-btn" startIcon={<ClearAllIcon />}>
            Clear
          </Button>
          <Button className="note-editor-btn" startIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default NoteEditor;
