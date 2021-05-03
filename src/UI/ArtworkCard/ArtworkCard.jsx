import React from "react";
import "./_artwordCard.scss";

export default function ArtworkCard({
  artist,
  title,
  dimensions,
  medium,
  image,
  uniqueKey,
  id,
}) {
  return (
    <li key={uniqueKey} id={id} className="artwork-card-container">
      <div className="img-container">
        <img className="artwork-image" src={image} alt="" />
      </div>
      <div className="description-container">
        <h1>{artist}</h1>
        <h2>{title}</h2>
        <p>{medium}</p>
        <p>{dimensions}</p>
      </div>
    </li>
  );
}
