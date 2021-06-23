import React, { useState } from "react";
import { Icon } from "rsuite";
import "./_footer.scss";

const Footer = () => {
  const [isInfoShown, toggleInfo] = useState(false);

  const handleOpenCloseInfo = () => {
    !isInfoShown ? toggleInfo(true) : toggleInfo(false);
  };

  return (
    <section
      className="footer-container"
      style={
        !isInfoShown
          ? { justifyContent: "flex-end" }
          : { justifyContent: "space-between" }
      }
    >
      {!isInfoShown ? (
        <div className="icon-wrapper">
          <Icon
            icon="info"
            style={{ color: "#204361" }}
            size="2x"
            onClick={handleOpenCloseInfo}
          />
        </div>
      ) : (
        <>
          <div className="about-author">
            Designed and developed with <Icon icon="heart" /> by Mariusz Urban
          </div>
          <div className="details-buttons">
            <div className="social-buttons">
              <div className="icon-wrapper">
                <Icon icon="youtube-play" size="2x" />
              </div>
              <div className="icon-wrapper">
                <Icon icon="soundcloud" size="2x" />
              </div>
              <div className="icon-wrapper">
                <Icon icon="github" size="2x" />
              </div>
              <div className="icon-wrapper">
                <Icon icon="instagram" size="2x" />
              </div>
            </div>
            <div className="close-button">
              <div className="icon-wrapper">
                <Icon
                  icon="close"
                  style={{ color: "#204361" }}
                  size="2x"
                  onClick={handleOpenCloseInfo}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Footer;
