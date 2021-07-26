import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./_noteSearch.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "58px",
    borderRadius: "15px",
    boxShadow: " none",
    border: "1px solid #204361",
    backgroundColor: "transparent",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "#204361",
  },
}));

const NoteSearch = ({ value, handleSearchNote }) => {
  const classes = useStyles();

  return (
    <div className="notes-search-container">
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search "
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => {
            handleSearchNote(e.target.value);
          }}
          value={value}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default NoteSearch;
