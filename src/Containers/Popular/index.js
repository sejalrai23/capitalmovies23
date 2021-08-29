import React from "react";
import Navbarr from "../../Components/Navbar/index";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Popular = () => {
  return (
    <>
      <Navbarr />
      <Container fluid className="mt-5 pt-5">
        <Row>
          <Col md={1} className="ms-5">
            <Link to="/discover"><IoIosArrowBack size={25} /></Link>
          </Col>
          <Col md={2}>
            <h4>Popular Movies</h4>
          </Col>
          <Col md={9}></Col>
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
                  <h5 className="card-title">Movie Name</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">RELEASED ON :20 JUNE 2021</small></p>
                </div>
              </div>
            </div>
          </div>
        </Row>


      </Container>
    </>

  );
}

export default Popular;