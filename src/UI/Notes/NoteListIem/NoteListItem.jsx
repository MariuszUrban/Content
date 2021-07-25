import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
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

const NoteListItem = () => {
  const classes = useStyles();

  return (
    <div className="note-list-item-container">
      <div className="note-title-bar">
        <div className="note-title-wrapper">
          <h1 className="note-title">Untitled</h1>
        </div>
        <div className="note-date-wrapper">
          <p className="note-date">23.07.21</p>
        </div>
      </div>
      <div className="note-content-bar">
        <div
          className="note-photo"
          style={{
            backgroundImage: `url(${"https://www.artic.edu/iiif/2/6a2d2716-2d5d-2ef9-88c5-39a30f769cad/full/600,/0/default.jpg"})`,
          }}
        ></div>
        <p className="note-note">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful.
        </p>
      </div>
      <div className="note-btns-bar">
        <IconButton>
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
