import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Content, ButtonGroup } from "rsuite";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import ShareIcon from "@material-ui/icons/Share";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArtworkModalNote from "../ArtworkModalNote/ArtworkModalNote";
import "./_artworkModalFunctions.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
  input: {
    display: "none",
  },
}));

const ArtworkModalFunctions = ({ id, image, title, artist }) => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();

  return (
    <div className="artwork-modal-functions-container">
      <Content className="artwork-modal-functions-btns">
        <ButtonGroup className="artwork-modal-control-btns">
          <IconButton className={classes.root} component="span">
            <FavoriteBorderIcon />
          </IconButton>
          <Link to={`${url}/${id}/note-modal`}>
            <IconButton className={classes.root} component="span">
              <NoteAddOutlinedIcon />
            </IconButton>
          </Link>
          <IconButton className={classes.root} component="span">
            <ShareIcon />
          </IconButton>
          <IconButton className={classes.root} component="span">
            <FormatListBulletedIcon />
          </IconButton>
          <IconButton className={classes.root} component="span">
            <VisibilityIcon />
          </IconButton>
        </ButtonGroup>
      </Content>
      <Content className="artwork-modal-functions-modules">
        <Switch>
          <Route
            path={`${path}/:id/note-modal`}
            children={
              <ArtworkModalNote
                id={id}
                image={image}
                title={title}
                artist={artist}
              />
            }
          />
        </Switch>
      </Content>
    </div>
  );
};

export default ArtworkModalFunctions;
