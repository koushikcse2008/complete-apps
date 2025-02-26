import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  return (
    <>
    <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12 rounded">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info fw-bold border-bottom border-2 border-info">Login</h3>
                            <div className="form-group mt-3">
                                <label for="username" className="text-info fw-bold">Email Id:</label><br />
                                <input type="text" name="username" id="username" className="form-control" />
                            </div>
                            <div className="form-group mt-2 mb-3">
                                <label for="password" className="text-info fw-bold">Password:</label><br />
                                <input type="text" name="password" id="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info">
                                    <span><input id="remember-me" name="remember-me" type="checkbox" className='me-2' /></span>
                                    <span>Remember me</span>
                                    </label><br />
                                <input type="submit" name="submit" className="btn btn-info btn-md text-white fw-bold mt-2" value="Login" />
                                <Link to='/forgot-password' className="text-info ms-2 rightside">Forgot Password</Link>
                            </div>
                            {/* <div id="register-link" className="mt-1  text-end float-right">
                                <a href="#" className="text-info">Register here</a>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
