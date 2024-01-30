import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: 400 + "px" }}
              >
                <Image
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="/img/about-1.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src="/img/about-2.jpg"
                  alt=""
                  width={200}
                  height={200}
                  // style={{ width: 200 + "px", height: 200 + "px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  About Us
                </div>
                <h1 className="display-6 mb-2">
                  Embarking on a Journey of Healing and Hope
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Zambezi Cancer Hospital extends a heartfelt welcome to
                    individuals traversing the challenging path of cancer. Our
                    devoted team is dedicated to delivering compassionate care
                    and unwavering support throughout every phase.
                  </p>
                  <span className="text-primary">Dr. Mutuma, Founder</span>
                </div>
                <p className="mb-5">
                  Guided by our esteemed founder, Dr. Mutuma, and supported by a
                  team of experienced oncologists, surgeons, nurses, and
                  auxiliary staff, we unite diverse expertise to provide
                  comprehensive cancer services. Our unwavering commitment to
                  excellence ensures that patients receive personalized care
                  meticulously tailored to their unique needs.
                </p>
                <a className="btn btn-primary py-2 px-3 me-3" href="">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
                <a className="btn btn-outline-primary py-2 px-3" href="">
                  Contact Us
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
};

export default About;
