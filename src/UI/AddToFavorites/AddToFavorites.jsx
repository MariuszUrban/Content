import React from "react";
import Icon from "@material-ui/core/Icon";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const AddToFavorites = ({ size, color }) => {
  return <FavoriteBorderIcon fontSize={size} style={{ color: color }} />;
};
