'use client';
import Link from "next/link";
import React from "react";
import contactus from "@/app/contactus/page";

const Header = () => {
    return (
      <>
        {/* <!-- Navbar Start --> */}
        <div
          className="container-fluid fixed-top px-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
              <small>
                <i className="fa fa-map-marker-alt me-2"></i>Mai Mahiu Road
                , Nairobi, Kenya
              </small>
              <small className="ms-4">
                <i className="fa fa-envelope me-2"></i>thezambezihospital@gmail.com
              </small>
            </div>
            <div className="col-lg-6 px-5 text-end">
              <small>Follow us:</small>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <nav
            className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <a href="" className="navbar-brand ms-4 ms-lg-0">
              <h1 className="fw-bold text-primary m-0">
                ZambeziCancer<span className="text-white">Hospital</span>
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="" className="nav-item nav-link active">
                  Home
                </a>
                <a href="" className="nav-item nav-link">
                  About
                </a>
                <a href="" className="nav-item nav-link">
                  Services
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Information Centre
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="" className="dropdown-item">
                      Research and Innovation
                    </a>
                    <a href="d" className="dropdown-item">
                      Donate
                    </a>
                    <a href="" className="dropdown-item">
                      Our Team
                    </a>
                    <a href="" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="" className="dropdown-item">
                      Patient Resources
                    </a>
                  </div>
                </div>
               
                <a href="/contactus" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="d-none d-lg-flex ms-2">
                <a className="btn btn-outline-primary py-2 px-3" href="">
                  Donate Now
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
        {/* <!-- Navbar End --> */}
      </>
    );
}

export default Header;
