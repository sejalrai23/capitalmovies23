import React from "react";
import "./style.css";
import login from "../../assets/login.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row content">
          <div className="col-md-6 mb-3">
            <div className="loginimg">
              <img fluid src={login} alt="login" />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="signin-text mb-3"> Sign In</h3>
            <form>
              <div className="form-group my-3">
                <label for="email">Email</label>
                <input type="email" name="email" className="form-control" />
              </div>
              <div className="form-group my-3">
                <label for="password">Password</label>
                <input type="password" name="password" className="form-control" />
              </div>
              <button className="btn btn-class my-3">Login</button>

            </form>
            <div className="d-flex">
              <h6 className="d-flex mt-1 mx-2">New to Capital Movies</h6>

              <Link to="/signup"><span>Sign-up</span></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;