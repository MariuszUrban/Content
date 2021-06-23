import React, { useState } from "react";
import ButtonMain from "../ButtonMain/ButtonMain";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import "./_about.scss";

const About = () => {
  const [isShown, setIsShown] = useState("idea");

  let paragraph;

  if (isShown === "idea") {
    paragraph = (
      <p className="desc">
        Idea behind the app comes from difficulty of finding reliable cultural
        and artistic resources in the web, especially in one place. Thus, one of
        the main ideas behind the project is to gather in one place all
        available data about art history and contemporary art. <br />
        <br /> Having this as basis, the app aims to be useful tool for all
        cultural and artistic practitioners by giving them at first, vast visual
        resources of all artistic styles and periods. Further, app helps to
        organize collected data in lists and sets, so looking at the complexity
        of global artistic heritage becomes even easier and efficient.
      </p>
    );
  }
  if (isShown === "resources") {
    paragraph = (
      <div className="resources-wrapper">
        <p className="desc resources">
          The core of the app is using resources available from following
          institutions and organisations:
          <br /> <br />
          Asia Art Archive
          <br /> Art Institute Chicago
          <br /> Brooklyn Museum
          <br /> Carnegie Museum of Art
          <br /> Cleveland Museum of Art
          <br /> CooperHewitt
          <br /> Deutsche Digitale Bibliothek
          <br /> DigitalNZ
          <br /> Europanea
          <br /> Harvard Museum of Art
          <br /> Getty Images
          <br /> Metropolitan Museum of Art
          <br /> MediaWiki
          <br /> MoMA
          <br /> Museum für Kunst und Gewerbe Hamburg
          <br /> National Palace Museum
          <br /> Rijksmuseum
          <br /> Smithsonian Museum
          <br /> Tate
          <br /> Yale Center for British Art
          <br /> Walters Art Museum
        </p>
      </div>
    );
  }
  if (isShown === "functionality") {
    paragraph = (
      <div className="functionality-wrapper">
        Prototype version of the app provides to user several basic
        functionalities:
        <br /> <br />
        <ul className="desc functionality-list">
          <li>Setting up user account</li>
          <li>
            Artworks search by keywords, artistic periods or by trending themes
          </li>
          <li>Adding found artworks to favorites list</li>
          <li>Creating user's own lists</li>
          <li>Adding general notes or attached to particular artworks</li>
          <li>Sharing artworks in social media</li>
        </ul>
      </div>
    );
  }
  if (isShown === "updates") {
    paragraph = (
      <div className="updates-wrapper">
        <p className="desc updates">
          <div className="desc updates-list">
            Features I'm working on now and to be added soon:
            <br />
            <br />
            Server setup
            <br /> Computer Vision image scan
            <br />
            VR view of selected artworks
            <br />
            File upload
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            ...and hopefully some extra
            <br />
            <br />
            <br />
            <br />
            <Icon icon="angellist" size="2x" />
          </div>
        </p>
      </div>
    );
  }

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-categories-list">
          <ul>
            <li
              value
              className="list-element"
              onClick={() => {
                setIsShown("idea");
              }}
            >
              Idea
            </li>
            <li
              value
              className="list-element"
              onClick={() => {
                setIsShown("resources");
              }}
            >
              Resources
            </li>
            <li
              value
              className="list-element"
              onClick={() => {
                setIsShown("functionality");
              }}
            >
              Functionality
            </li>
            <li
              value
              className="list-element"
              onClick={() => {
                setIsShown("updates");
              }}
            >
              Planned updates
            </li>
          </ul>
        </div>
        <div className="about-categories-desc">{paragraph}</div>
      </div>
      <div className="about-back-to-main">
        <Link to="/">
          <ButtonMain text="home" />
        </Link>
      </div>
    </div>
  );
};

export default About;
