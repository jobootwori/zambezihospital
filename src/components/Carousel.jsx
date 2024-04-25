"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if the screen size is small
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen to window resize event
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

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
              <div className="carousel-caption pt-xxl-5 pt-lg-4 pt-md-3 pt-sm-2 pt-1">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      {isSmallScreen && (
                        <h1 className="display-5 text-white mb-3 animated slideInDown">
                          Empathy in Every Encounter Care in Every Moment
                        </h1>
                      )}
                      {!isSmallScreen && (
                        <>
                          <h1
                            className="display-5 text-white mb-3 animated slideInDown"
                            style={{ fontSize: "2rem" }}
                          >
                            Empathy in Every Encounter Care in Every Moment
                          </h1>
                          <p
                            className="fs-5 fs-sm-6 fs-md-4 fs-lg-3  text-white-50 mb-5 animated slideInDown"
                            style={{ fontSize: "1.25rem" }}
                          >
                            Step into a realm where compassion harmonizes with
                            expertise. The Zambezi Hospital stands beside you,
                            committed to providing unwavering support and
                            world-class care. Your health and wellness are our
                            foremost priorities, embodying our mission to
                            nurture and safeguard your well-being.
                          </p>
                          <a
                            className="btn btn-primary py-2 px-3 animated slideInDown"
                            href="/services"
                          >
                            Learn More
                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                              <i className="fa fa-arrow-right"></i>
                            </div>
                          </a>
                        </>
                      )}
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
                      {isSmallScreen && (
                        <h1
                          className="display-5 text-white mb-3 animated slideInDown"
                          style={{ fontSize: "2rem" }}
                        >
                          Stride with Purpose: BF Suma The Zambezi Hospital
                          Cancer Walk
                        </h1>
                      )}{" "}
                      {!isSmallScreen && (
                        <>
                          <h1
                            className="display-5 text-white mb-3 animated slideInDown"
                            style={{ fontSize: "2rem" }}
                          >
                            Stride with Purpose: BF Suma The Zambezi Hospital
                            Cancer Walk
                          </h1>
                          <p
                            className="fs-5 fs-sm-6 fs-md-4 fs-lg-3 text-white-50 mb-5 animated slideInDown"
                            style={{ fontSize: "1.25rem" }}
                          >
                            Take purposeful steps with us in the BF Suma Zambezi
                            Hospital Cancer Walk—a journey beyond hope to
                            tangible support and a future actively shaped
                            against cancer. Together, we walk, acknowledging
                            loss, celebrating resilience, and advocating for a
                            brighter tomorrow. Every step is a deliberate move
                            towards a reality where the impact of cancer
                            diminishes. Join us on this purpose-driven walk,
                            making strides that matter.
                          </p>
                          <a
                            className="btn btn-primary py-2 px-3 animated slideInDown"
                            href="/cancerwalk"
                          >
                            Learn More
                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                              <i className="fa fa-arrow-right"></i>
                            </div>
                          </a>
                        </>
                      )}
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
