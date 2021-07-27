import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./_artworkCard.scss";
import { AddToFavorites } from "../AddToFavorites/AddToFavorites";
import { Share } from "../Share/Share";
import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "100%",
    position: "relative",
    backgroundColor: "#cdd8df",
    border: "none",
  },
  content: {
    height: "85%",
    backgroundColor: "#cdd8df",
  },
  actionButtons: { height: "15%", backgroundColor: "#cdd8df" },
  media: {
    height: "80%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "15px 15px 0 0",
  },
  info: {
    height: "20%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 12,
    fontStyle: "italic",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  description: {
    fontSize: 10,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  action: {
    height: "100%",
  },
  image: {
    height: "100%",
  },
});

export const ArtworkCard = ({ image, artist, title, toggleOpenClose, id }) => {
  const classes = useStyles();
  let { url } = useRouteMatch();

  return (
    <Link to={`${url}/${id}`}>
      <Card
        className={classes.root}
        variant="outlined"
        onClick={toggleOpenClose}
      >
        <CardActionArea className={classes.content}>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent className={classes.info}>
            <Typography
              className={classes.title}
              gutterBottom
              variant="body1"
              component="p"
              maxLength="20"
            >
              {title}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              component="p"
              maxLength="20"
            >
              {artist}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actionButtons}>
          <Button fontSize="small" color="primary">
            <AddToFavorites size="small" color="rgb(150 150 148)" />
          </Button>
          <Button size="small" color="primary">
            <Share size="small" color="rgb(150 150 148)" />
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default ArtworkCard;
