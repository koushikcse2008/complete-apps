import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const ForgotPassword = () => {

  return (
    <>
    <div id="forgotlogin">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12 rounded">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info fw-bold border-bottom border-2 border-info">Forgot Password</h3>
                            <div className="form-group mt-3">
                                <label for="username" className="text-info fw-bold">Email id:</label><br />
                                <input type="text" name="username" id="username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" name="submit" className="btn btn-info btn-md text-white fw-bold mt-2" value="Login" />
                                <Link to="/" className="text-info ms-2 rightside">Back to login</Link>
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

export default ForgotPassword
