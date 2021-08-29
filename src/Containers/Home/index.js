import React, { useState } from "react";
import Navbarr from "../../Components/Navbar/index";
import { Button, Carousel, Container, Row, Offcanvas, Nav, Col } from "react-bootstrap";
import "./style.css";
import Footer from "../../Components/Footer/index";

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbarr />
      <Container fluid className="carousel-container">


        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://picsum.photos/200/300"
              alt="First slide"
              height="500px"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              alt="Second slide"
              height="500px"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              alt="Third slide"
              height="500px"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="my-5">

          <Col md={2}>
            <h4>Trending Movies</h4>
          </Col>
          <Col md={10}></Col>
        </Row>

        <hr />

        <Row>
          <div className="card mx-3 mb-3 w-50" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://picsum.photos/200/300" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Movie-Name</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Released on : 22 MAY 2021</small></p>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className="my-5" >
          <Col md={4}></Col>
          <Col md={4}>
            <Row>
              <Col md={1}></Col>
              <Col md={10}><h4 text-align-center>WELCOME TO CAPITAL MOVIES</h4></Col>
              <Col md={1}></Col>

            </Row>
            <Row>
              <Col md={4}></Col>
              <Col md={4}><Button onClick={handleShow} className="text-align-center">Explore</Button></Col>
              <Col md={4}></Col>
            </Row>
          </Col>

          <Col md={4}></Col>
        </Row>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Dashboard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav.Link href="/discover/popular">Popular Movies</Nav.Link>
            <Nav.Link href="/discover/latest">Latest Movies</Nav.Link>
            <Nav.Link href="#">Your Favourites</Nav.Link>
          </Offcanvas.Body>
        </Offcanvas>

        <Footer />
      </Container>

















    </>

  );
}

export default Home;