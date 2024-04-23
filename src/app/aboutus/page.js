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

        {/* <!-- Donate Start --> */}
        <div
          className="container-fluid donate my-5 py-5"
          data-parallax="scroll"
          data-image-src="img/carousel-2.jpg"
        >
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Hospital Profile
                </div>

                <p className="text-white-50 mb-0">
                  <b>The Zambezi Hospital </b>is a level four private hospital
                  situated in south C, Ole Shapara Avenue. It has outpatient and
                  inpatient services with special emphasis on cancer prevention,
                  control, diagnosis and treatment. The hospital has thus been
                  in the fore front in health promotion which assists corporates
                  and individuals to maintain their own health, detect health
                  risk behaviors and lifestyle modification.
                </p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                <p className="text-white-50 mb-0">
                  <b>The Zambezi Hospital </b>is an expansion of Nairobi
                  pathology and allied services which had been in place since
                  1998 which was offering medico-legal services, medical
                  laboratory services with outpatient services specialized in
                  cancer diagnosis. It had outreach services for screening and
                  creating cancer awareness and other non-communicable diseases
                  (NCDs). This was through health talks and medical camps in
                  Nairobi, Machakos, Makueni, Embu, Nyeri and Meru counties.
                </p>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 bg-white p-5">
                  <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                  <p className="text-black-50 mb-0">
                    The Zambezi hospital opened its doors to the public in
                    September 2014 and is designed to become a recognized leader
                    in its target market for its expansive line of cancer
                    diagnosis, health and wellness screening, clinical, and
                    medico- legal services. The facility with minimum of 25 beds
                    in- patient care provides a full scale emergency room,
                    outpatient department, consulting clinics, minor theatre,
                    medical laboratory, Pharmacy, ultrasound, physiotherapy and
                    other services to mention a few.
                  </p>
                  <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Donate End --> */}

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
