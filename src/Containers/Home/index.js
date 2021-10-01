import React, { useState } from "react";
import Navbarr from "../../Components/Navbar/index";
import { Button, Carousel, Container, Row, Offcanvas, Nav, Col } from "react-bootstrap";
import "./style.css";
import Footer from "../../Components/Footer/index";
import { BsFillCollectionPlayFill, BsFillHeartFill } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import { GrPlayFill, GrBookmark } from "react-icons/gr";


const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <div >
        <Navbarr />

        <div className="body-item">

          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={img1}
                alt="First slide"
                height="500px"
              />
              <Carousel.Caption className="carousel-text">
                <h3 className="carousel-caption1">MONEY HEIST</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                height="500px"
              />

              <Carousel.Caption>
                <h3 className="carousel-caption1">LUCIFER</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                height="500px"
              />

              <Carousel.Caption>
                <h3 className="carousel-caption1">MIRZAPUR</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>

        </div>

        <div className="movie-header">
          <div className="lines2"></div>
          <div className=" lines-title"><h4>Trending Movies</h4></div>
          <div className="lines2"></div>
        </div>
        <Row className="mx-auto" >
          <Col className=" my-2" md={4} sm={4}>
            <div className="morph">
              <img className="img-fluid movie-img" src="https://picsum.photos/200/200" alt="movie" />
              <div className="morph-text">
                <h4 >Movie Name</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis laboriosam, fuga commodi ducimus sequi iure! </p>
              </div>
              <div className="morph-icons">
                <div><GrPlayFill size={25} /></div>
                <div><GrBookmark size={25} /></div>

              </div>
            </div>
          </Col>

          <Col className=" my-2" md={4} sm={4}>
            <div className="morph">
              <img className="img-fluid movie-img" src="https://picsum.photos/200/200" alt="movie" />
              <div className="morph-text">
                <h4 >Movie Name</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis laboriosam, fuga commodi ducimus sequi iure! </p>
              </div>
              <div className="morph-icons">
                <div><GrPlayFill size={25} /></div>
                <div><GrBookmark size={25} /></div>

              </div>
            </div>
          </Col>
          <Col className=" my-2" md={4} sm={4}>
            <div className="morph">
              <img className="img-fluid movie-img" src="https://picsum.photos/200/200" alt="movie" />
              <div className="morph-text">
                <h4 >Movie Name</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis laboriosam, fuga commodi ducimus sequi iure! </p>
              </div>
              <div className="morph-icons">
                <div><GrPlayFill size={25} /></div>
                <div><GrBookmark size={25} /></div>

              </div>
            </div>
          </Col>
        </Row>

        <div className="dashboard mb-3">
          <div className="movie-header">
            <div className="lines3"></div>
            <div className=" lines3-title"><h4>WELCOME TO CAPITAL MOVIES</h4></div>
            <div className="lines3"></div>
          </div>
          <div>
            <button onClick={handleShow} className="text-align-center btn btn-class">Explore</button>
            {/* <button onClick={handleShow} className="text-align-center ebtn-class">Explore</button> */}
          </div>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>

            <Offcanvas.Title className="canvas-title">Dashboard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="canvas-nav">
            <div className="canvas-list text-align-center">
              <span className="mt-2">
                <BsFillCollectionPlayFill size={25} className="canvas-logo" />
              </span>
              <span>
                <Nav.Link className="canvas-link" href="/discover/popular">Popular Movies</Nav.Link>
              </span>
            </div>
            <div className="canvas-list text-align-center">
              <span className="mt-2 ">
                <RiPlayList2Fill className="canvas-logo" size={25} />
              </span>
              <span>
                <Nav.Link className="canvas-link" href="/discover/latest">Latest Movies</Nav.Link>
              </span>

            </div>
            <div className="canvas-list text-align-center">
              <span className="mt-2">
                <BsFillHeartFill className="canvas-logo" size={25} />
              </span>
              <span>
                <Nav.Link className="canvas-link" href="#">Your Favourites</Nav.Link>
              </span>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <Footer />

      </div>


    </>

  );
}

export default Home;