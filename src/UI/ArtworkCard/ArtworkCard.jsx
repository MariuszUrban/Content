import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Typography from "@material-ui/core/Typography";
import "./_artworkCard.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 280,
    minHeight: 420,
    height: "100%",
    position: "relative",
  },
  content: {
    height: "90%",
  },
  media: {
    height: "80%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    fontSize: 14,
    fontStyle: "italic",
  },
  action: {
    height: "100%",
  },
  image: {
    height: "100%",
  },
  actionButtons: { height: "10%" },
});

export const ArtworkCard = ({ image, artist, title, toggleOpenClose }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" onClick={toggleOpenClose}>
      <CardActionArea className={classes.content}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h2"
            component="h2"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionButtons}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArtworkCard;
