"use client";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="fw-bold text-primary mb-4">
                ZambeziCancer<span className="text-white">Hospital</span>
              </h4>
              <p>
                The Zambezi Hospital is a level four private hospital situated
                in south C, Ole Shapara Avenue. It has outpatient and inpatient
                services with special emphasis on cancer prevention, control,
                diagnosis and treatment.
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square me-1" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square me-0" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Maai Mahiu road,
                Nairobi
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+254 722 801 299
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                thezambezihospital@gmail.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <a className="btn btn-link" href="/aboutus">
                About Us
              </a>
              <a className="btn btn-link" href="/contactus">
                Contact Us
              </a>
              <a className="btn btn-link" href="/services">
                Our Services
              </a>
              
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Subscribe to get our weekly Newsletter</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 + "px" }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a href="#">Zambezi Cancer Hospital</a>, All Right
                Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <a href="https://github.com/jobootwori">BnB Solutions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
};

export default Footer;
