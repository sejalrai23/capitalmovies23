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
                src="data:image/jpeg;base64,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"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHe72pbB4289ANFf0II8SH3okiMn_QzA31w&usqp=CAU"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vggXd6Vw3tQgagAOGbm-w0NZzMu0imWACg&usqp=CAU"
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