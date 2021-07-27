import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Modal, Container, Content, Col, Row, Grid, Icon } from "rsuite";
import Typography from "@material-ui/core/Typography";
import "./_artworkModal.scss";
import ArtworkModalFunctions from "./ArtworkModalFunctions/ArtworkModalFunctions";

export const ArtworkModal = ({
  isModalOpen,
  toggleOpenClose,
  image,
  title,
  artist,
  medium,
  dimensions,
  id,
}) => {
  let { url } = useRouteMatch();

  return (
    <Modal full show={isModalOpen} onHide={toggleOpenClose}>
      <div className="modal-icon-wrapper">
        <Link to={`${url}`}>
          <Icon icon="close" size="x6" onClick={toggleOpenClose} />
        </Link>
      </div>
      <Grid fluid>
        <Row classPrefix="full-artwork">
          <Col xsHidden xs={18} className="left-side">
            <img className="artwork-image-big" src={image} alt="" />
          </Col>
          <Col xsHidden xs={6} className="right-side">
            <Modal.Body className="modal-content-wrapper">
              <Container className="modal-content-container">
                <Content className="about-art-work">
                  <Typography align="left" variant="h5">
                    {title}
                  </Typography>
                  <Typography align="left" variant="h6">
                    {artist}
                  </Typography>
                  <Typography align="left" variant="caption">
                    {medium}
                  </Typography>
                  <Typography align="left" variant="caption">
                    {dimensions}
                  </Typography>
                </Content>
                <ArtworkModalFunctions
                  id={id}
                  image={image}
                  title={title}
                  artist={artist}
                />
              </Container>
            </Modal.Body>
          </Col>
        </Row>
      </Grid>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ArtworkModal;
