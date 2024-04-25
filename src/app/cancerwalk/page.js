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
                  style={{ width: "100%", height: "auto" }}
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
                    Take purposeful steps with us in the BF Suma Zambezi
                    Hospital Cancer Walk—a journey beyond hope to tangible
                    support and a future actively shaped against cancer.
                    Together, we walk, acknowledging loss, celebrating
                    resilience, and advocating for a brighter tomorrow. Every
                    step is a deliberate move towards a reality where the impact
                    of cancer diminishes. Join us on this purpose-driven walk,
                    making strides that matter.
                  </p>
                  {/* <span className="text-primary">Dr. Mutuma, Founder</span> */}
                </div>
                <p className="mb-5">
                  Step by step, together we stride towards a future free from
                  cancer's grip. Join us for our annual cancer walk as we walk
                  with hope, unite in solidarity, and inspire change. Together,
                  we can make a difference in the fight against cancer. See you
                  at the starting line!
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
