import React from "react";
import "../Login/style.css";
import { Row, Col } from "react-bootstrap";
import login from "../../assets/login.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="row content">
        <div className="col-md-6 mb-3">
          <div className="loginimg mt-5">
            <img className="img-fluid" src={login} alt="login" />
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="signin-text mb-3"> Sign Up</h3>
          <form>
            <Row>
              <Col md={6}>
                <div className="form-group my-3">
                  <label for="name">First Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>

              </Col>
              <Col md={6}>
                <div className="form-group my-3">
                  <label for="name">Last Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>

              </Col>
            </Row>

            <div className="form-group my-3">
              <label for="email">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group my-3">
              <label for="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>
            <div className="form-group my-3">
              <label for="password">Re-enter Password</label>
              <input type="password" name="password" className="form-control" />
            </div>
            <Link to="/discover"><button className="btn btn-class my-3">Sign Up</button></Link>
          </form>
          <div className="d-flex">
            <h6 className="d-flex mt-1 mx-2">New to Capital Movies</h6>

            <Link to="/login"><span>Login</span></Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Signup;