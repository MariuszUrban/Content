import React from "react";
import {
  Modal,
  Container,
  Header,
  Content,
  Footer,
  ButtonGroup,
  IconButton,
  Icon,
  Col,
  Row,
  Grid,
} from "rsuite";
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
      <Modal.Header></Modal.Header>
      <Grid fluid>
        <Row className="full-artwork">
          <Col xsHidden xs={18} className="left-side">
            <img className="artwork-image-big" src={image} alt="" />
          </Col>
          <Col xsHidden xs={6} className="right-side">
            <Modal.Body>
              <Container>
                <Content className="about-art-work">
                  <Header>{title}</Header>
                  <h1>{artist}</h1>
                  <p>{medium}</p>
                  <p>{dimensions}</p>
                </Content>
                <Content>
                  <ButtonGroup>
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
                <Footer>Footer</Footer>
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
