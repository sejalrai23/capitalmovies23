import React from "react";
import Navbarr from "../../Components/Navbar/index";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./style.css";
import { GrPlayFill, GrBookmark } from "react-icons/gr";
const Popular = () => {
  return (
    <>
      <Navbarr />
      <Container fluid className="mt-5 pt-5">
        <div className="movie-header">
          <div className="lines2"></div>
          <div className=" lines-title"><h4>Popular Movies</h4></div>
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

      </Container>
    </>

  );
}

export default Popular;