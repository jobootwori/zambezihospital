import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
const page = () => {
  return (
    <div>
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
      {/* <!-- Spinner End --> */}

      <Header />
      <PageHeader pageTitle="Cancer Walk" />

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
                  src="/img/media/3.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Image
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src="/img/media/5.jpg"
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
                  BF Suma The Zambezi Hospital Cancer Walk
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    The Zambezi Hospital has been organizing the annual Cancer
                    Walk since 2015 whose main objectives are:- <br></br>{" "}
                    &nbsp;• To create Awareness of the importance of routine
                    screening, early detection, early diagnosis, and treatment
                    as the best cancer control and prevention methods, <br></br>{" "}
                    &nbsp;• To give support to the patients and families
                    affected by cancer.
                  </p>
                  {/* <span className="text-primary">Dr. Mutuma, Founder</span> */}
                </div>
                <p className="mb-5">
                  This year, the 1st Cancer Walk was held on 25th February and
                  was very successful. The 2nd Cancer Walk will be in September
                  and October. With the support from individuals, schools, and
                  corporates, we were able to raise a total of Kshs 6.5M in both
                  cash and in kind
                </p>
                <a className="btn btn-primary py-2 px-3 me-3" href="/media">
                  Media Gallery
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
                <a
                  className="btn btn-outline-primary py-2 px-3"
                  href="/contactus"
                >
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
    </div>
  );
};

export default page;
