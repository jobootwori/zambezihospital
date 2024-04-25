'use client';
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
          // {/* <!-- Service Start --> */}
          <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 + "px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              What We Do
            </div>
            <h1 className="display-6 mb-5">
              Learn More What We Do And Get Involved
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <Image
                  className="img-fluid mb-4"
                  src="/img/icon-1.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 100 + "px", height: "auto" }}
                  alt=""
                />
                <h4 className="mb-3">Diagnosis</h4>
                <p className="mb-4">
                  Utilizing advanced diagnostic tools, imaging, and laboratory
                  tests for accurate and early detection of various cancer
                  types.
                </p>
                <a className="btn btn-outline-primary px-3" href="/services">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <Image
                  className="img-fluid mb-4"
                  src="/img/icon-2.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 100 + "px", height: "auto" }}
                  alt=""
                />
                <h4 className="mb-3">Medical Treatment</h4>
                <p className="mb-4">
                  Offering a comprehensive range of treatments, including
                  surgery, chemotherapy, radiation therapy and immunotherapy,
                </p>
                <a className="btn btn-outline-primary px-3" href="/services">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <Image
                  className="img-fluid mb-4"
                  src="/img/icon-3.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 100 + "px", height: "auto" }}
                  alt=""
                />
                <h4 className="mb-3">Research</h4>
                <p className="mb-4">
                  Conducting cutting-edge cancer research, clinical trials, and
                  contributing to advancements in cancer treatment and care
                </p>
                <a className="btn btn-outline-primary px-3" href="/services">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- Service End --> */}
      </>
  );
};

export default Service;
