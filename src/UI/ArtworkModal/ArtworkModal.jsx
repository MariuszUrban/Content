import React from "react";
import {
  Modal,
  Container,
  Content,
  Footer,
  ButtonGroup,
  IconButton,
  Icon,
  Col,
  Row,
  Grid,
} from "rsuite";
import Typography from "@material-ui/core/Typography";

import "./_artworkModal.scss";

export const ArtworkModal = ({
  isModalOpen,
  toggleOpenClose,
  image,
  title,
  artist,
  medium,
  dimensions,
}) => {
  return (
    <Modal full show={isModalOpen} onHide={toggleOpenClose}>
      <div className="modal-icon-wrapper">
        <Icon icon="close" size="x6" onClick={toggleOpenClose} />
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
                <Content>
                  <ButtonGroup className="modal-control-btns">
                    <IconButton
                      icon={<Icon icon="heart-o" />}
                      circle
                      size="md"
                    />
                    <IconButton icon={<Icon icon="list" />} circle size="md" />
                    <IconButton icon={<Icon icon="edit" />} circle size="md" />
                    <IconButton icon={<Icon icon="share" />} circle size="md" />
                  </ButtonGroup>
                </Content>
                <Content>Content</Content>
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
