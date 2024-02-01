"use client";

import React from "react";

const CoreValues = () => {
  // Stling for the polygon
  const mapLikeImageStyle = {
    //position: "absolute",
    top: 0,
    right: 0,
    width: "150px", // Adjust the width as needed
    height: "100%",
    objectFit: "cover",
    clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
  };

  return (
    <div className="container-xxl py-5">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 + "px" }}
      >
        <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
          MOTTO: WE CARE FOR YOUR HEALTH AND WELLNESS
        </div>
        <h1 className="display-6 mb-5">Our Core Values </h1>
      </div>
      <div className="row g-4 justify-content-center">
       
        {/* Core Value 1 */}
        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s" >
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5 rounded">
            <h4 className="mb-3">Integrity</h4>
            <p className="mb-4">
              We uphold the highest standards of integrity in all our actions.
            </p>
            <div className="row justify-content-center align-items-center">
              {" "}
              
            </div>
          </div>
        </div>

        {/* Core Value 2 */}
        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5 rounded">
            <h4 className="mb-3">Compassion</h4>
            <p className="mb-4">
              We approach every patient with empathy and compassion, ensuring
              their well-being.
            </p>
          </div>
        </div>

        {/* Core Value 3 */}
        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5 rounded">
            <h4 className="mb-3">Excellence</h4>
            <p className="mb-4">
              We strive for excellence in the quality of care and services we
              provide.
            </p>
          </div>
        </div>

        {/* Core Value 4 */}
        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5 rounded">
            <h4 className="mb-3">Innovation</h4>
            <p className="mb-4">
              We embrace innovation to continually improve and advance
              healthcare.
            </p>
          </div>
        </div>

        {/* Core Value 5 */}
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.9s">
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5 rounded">
            <h4 className="mb-3">Teamwork</h4>
            <p className="mb-4">
              We foster a collaborative environment, working together for the
              well-being of our patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
