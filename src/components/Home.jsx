import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Image, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import "./Home.css";
import img_header from "../localAssets/YoutubeBanner.png";
import img_fb from "../localAssets/nc.jpg";
import img_logo from "../localAssets/logo512.png";
import img_padoru1 from "../localAssets/padoru.jpg";
import img_padoru2 from "../localAssets/padoru_Ereshkigal.jpg";
import img_padoru3 from "../localAssets/padoru_Inosuke.jpg";
import img_padoru4 from "../localAssets/padoru_Shinobu.jpg";
import img_padoru5 from "../localAssets/padoru_Tsukuyo.jpg";
import img_test from "../localAssets/Title Art Blue Hues Damaged Background.png";
import bg_test from "../bg.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/*
        <Container fluid className="page-header-separator">
          <p>This is a separator</p>
        </Container>
         */}

        {/*  CONTAINS THE PAGE */}
        <Container fluid className="page-header">
          <Image
            fluid
            className="page-header-img"
            src={img_header}
            alt="HEADER"
          />
        </Container>
        <Container fluid className="page-holder-modules">
          <Container fluid className="page-body intro">
            <h1>This is the website</h1>
            <h3>
              We do this and that and other kind of work and software that
              blahaskd alkhsdajlksdh laksdklashjdalksd alskd
              lakshdlkhjaslhaslsdh lka sdlkha hskldhkals dhlas
            </h3>
            <p>Know more</p>
            <div className="btn-primary-flex">
              <Link to="/about">
                <Button className="btn-primary"> About </Button>
              </Link>
            </div>
          </Container>
        </Container>

        {/* Page Holder */}

        <Container className="carousel-custom">
          <Carousel>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src={img_header}
                alt="FIRST slide"
              />

              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                className="carousel-img"
                src={img_header}
                alt="SECOND slide"
              />

              <Carousel.Caption>
                <h3>SECOND slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                className="carousel-img"
                src={img_header}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>THIRd slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container fluid className="body-splitter"></Container>

        {/* FIRST BANNER */}
        <Container fluid className="page-holder-full">
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru1} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru2} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru3} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>
          </Row>
        </Container>

        <Parallax
          blur={1}
          strength={-800}
          fluid
          bgImage={img_test}
          className="body-splitter-parallax centered-flex centered-text"
        ></Parallax>

        {/* SECOND BANNER */}
        <Container fluid className="page-holder-full">
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru1} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru2} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image src={img_padoru3} circle className="profile-pic" />
              <h3>Padoru!</h3>
              <p>Text that goes blah blah!</p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="body-splitter-lg"></Container>

        {/* FOOTER */}
        <Container fluid className="page-footer">
          <Container className="social-media-container">
            <h1>THIS IS THE NAME</h1>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4}>
                <Image src={img_fb} circle className="social-media-logo" />
              </Col>

              <Col xs={12} sm={4}>
                <Image src={img_padoru4} circle className="social-media-logo" />
              </Col>

              <Col xs={12} sm={4}>
                <Image src={img_logo} circle className="social-media-logo" />
              </Col>
            </Row>
          </Container>

          <Row className="show-grid text-center centered-flex">
            <div className="btn-secondary-flex">
              <Link to="/contact">
                <Button className="btn-secondary"> Contacto </Button>
              </Link>
            </div>
            <h5>Mexico City</h5>
          </Row>
        </Container>

        <Container
          fluid
          className="text-center centered-flex contact-container"
        >
          <h6>blah blah blah el nombre 2020</h6>
        </Container>
      </div>
    );
  }
}
