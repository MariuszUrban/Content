import React, { useState } from "react";
import "./_resultCard.scss";
import ArtworkModal from "../ArtworkModal/ArtworkModal";
import ArtworkCard from "../ArtworkCard/ArtworkCard";

export default function ResultCard({
  artist,
  title,
  dimensions,
  medium,
  image,
  uniqueKey,
  id,
}) {
  const [isModalOpen, openOrCloseModal] = useState(false);

  const toggleOpenClose = () => {
    isModalOpen ? openOrCloseModal(false) : openOrCloseModal(true);
  };

  return (
    <>
      <ArtworkCard
        key={uniqueKey}
        id={id}
        image={image}
        artist={artist}
        title={title}
        toggleOpenClose={toggleOpenClose}
      />
      <ArtworkModal
        isModalOpen={isModalOpen}
        toggleOpenClose={toggleOpenClose}
        artist={artist}
        title={title}
        dimensions={dimensions}
        medium={medium}
        image={image}
      />
    </>
  );
}
