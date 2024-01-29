import Image from "next/image";
import React from "react";

const Causes = () => {
  return (
    <>
      {/* <!-- Causes Start --> */}
      <div className="container-xxl bg-light my-5 py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 + "px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Information centre
            </div>
            <h1 className="display-6 mb-5">
              Everyone Deserves The Opportunity To Learn
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Treatment</small>
                  </div>
                  <h5 className="mb-3">The Treatment Modalities</h5>
                  <p>
                    Gain insights into the different treatment modalities
                    available for cancer. Understand how these approaches work
                    and their potential side effects
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    {/* <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div> */}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <Image
                    className="img-fluid"
                    src="/img/courses-1.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="">
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Cancer Types</small>
                  </div>
                  <h5 className="mb-3">The Various Types of Cancers</h5>
                  <p>
                    Explore detailed information on various types of cancers,
                    including risk factors, symptoms, and treatment options.
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    {/* <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div> */}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <Image
                    className="img-fluid"
                    src="/img/courses-2.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="">
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Healthy Life</small>
                  </div>
                  <h5 className="mb-3">Prevention and Early Detection</h5>
                  <p>
                    Learn about proactive measures for cancer prevention,
                    including lifestyle choices, screenings, and early detection
                    strategies
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    {/* <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div> */}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <Image
                    className="img-fluid"
                    src="/img/courses-3.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="">
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Causes End --> */}
    </>
  );
};

export default Causes;
