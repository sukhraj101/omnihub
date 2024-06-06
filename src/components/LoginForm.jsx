import React from 'react';
import logo from '../../public/images/vite.svg';

const LoginForm = () => {
  return (
    <div className="d-lg-flex half">
      <div className="bg" style={{backgroundImage: "url('images/bg.png')"}}></div>
      <div className="contents">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="mb-5">
                <img src={logo} alt="" className="login-logo" />
              </div>
              <div className="mb-4">
                <h3 className="login-title">Sign Up</h3>
                <p className="mb-4 login-desc">Enter you business details to get started.</p>
              </div>
              <form action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="username">Enter Your Name</label>
                  <input type="text" className="form-control" id="username"/>    
                </div>
                <div className="form-group">
                  <label htmlFor="username">Enter email address</label>
                  <input type="text" className="form-control" id="username"/>    
                </div>
                <div className="form-group">
                  <label htmlFor="username">Enter Business Address</label>
                  <input type="text" className="form-control" id="username"/>    
                </div>
                <div className="form-group  last mb-4">
                  <label htmlFor="username">Enter Phone No.</label>
                  <input type="text" className="form-control" id="username"/>    
                </div>
                {/* <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password"/>           
                </div> */}
                {/* <div className="d-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                    <input type="checkbox" defaultChecked={true}/>
                    <div className="control__indicator"></div>
                  </label>
                  <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                </div>         */}
                <input type="submit" value="Sign Up" className="btn btn-block btn-primary login-btn"/>        
                {/* <span className="d-block text-center my-4 text-muted">&mdash; or &mdash;</span>                    
                <div className="social-login">
                  <a href="#" className="facebook btn d-flex justify-content-center align-items-center">
                    <span className="icon-facebook mr-3"></span> Continue with Facebook
                  </a>
                  <a href="#" className="twitter btn d-flex justify-content-center align-items-center">
                    <span className="icon-twitter mr-3"></span> Continue with  Twitter
                  </a>
                  <a href="#" className="google btn d-flex justify-content-center align-items-center">
                    <span className="icon-google mr-3"></span> Continue with  Google
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
