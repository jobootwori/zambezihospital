import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                className="w-100"
                src="/img/carousel-1.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-5 text-white mb-3 animated slideInDown">
                        Empathy in Every Encounter Care in Every Moment
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Step into a place where compassion meets expertise. The
                        zambezi Cancer Hospital is honored to stand with you in
                        your fight against cancer, offering unwavering support
                        and world-class care
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href=""
                      >
                        Learn More
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                className="w-100"
                src="/img/carousel-2.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-5 text-white mb-3 animated slideInDown">
                        Join the BF Suma Zambezi Hospital Cancer Walk
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        The Cancer Walk is more than a journey; it&apos;s a
                        collective stride toward hope, support, and a
                        cancer-free future. Let&apos;s walk together, step by step,
                        as we celebrate survivors, honor those we&apos;ve lost, and
                        rally for a brighter tomorrow
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href=""
                      >
                        Learn More
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </>
  );
};

export default Carousel;
