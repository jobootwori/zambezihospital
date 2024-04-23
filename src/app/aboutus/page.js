import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import About from "../../components/About";
import CoreValues from "../../components/CoreValues";
const page = () => {
  return (
    <>
      <>
        <Header />
        <PageHeader pageTitle="About Us" />
        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 + "px" }}
            >
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                MOTTO: WE CARE FOR YOUR HEALTH AND WELLNESS
              </div>
              <h1 className="display-6 mb-5 mt-2">The Hospital Profile </h1>
            </div>
            <div className="row g-4 justify-content-center">
              <div
                className="col-lg-6 col-md-6 wow fadeInUp"
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
                  <h4 className="mb-3">Our Vision</h4>
                  <p className="mb-4">
                    To become the best hospital specialized in non-communicable
                    diseases (NCDs) prevention, screening, diagnosis and
                    treatment using evidence based latest technology and
                    excellence multidisciplinary approach to clientele in Kenya
                    and beyond.
                  </p>
                  {/* <a className="btn btn-outline-primary px-3" href="">
                    Learn More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a> */}
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 wow fadeInUp"
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
                  <h4 className="mb-3">Our Mission</h4>
                  <p className="mb-4">
                    To offer comprehensive health care services in order to
                    improve peoples’ lives in an environment where innovation
                    and education are integral to health promotion, disease
                    prevention, detection and treatment.
                  </p>
                  {/* <a className="btn btn-outline-primary px-3" href="">
                    Learn More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <About /> */}
        <CoreValues />
      </>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default page;
