import React from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

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
      <PageHeader pageTitle="Our Team" />

      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 + "px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Team Members
            </div>
            <h1 className="display-6 mb-5">Meet With Our Ordinary Soldiers</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-1.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Dr. Geoffrey Zambezi Mutuma</h5>
                  <p className="text-primary">CEO</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-2.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Theresa Zambezi</h5>
                  <p className="text-primary">COO</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-3.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Irene Melly</h5>
                  <p className="text-primary">RCO</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Joyce Murage</h5>
                  <p className="text-primary">RCO</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Moses Andaje</h5>
                  <p className="text-primary">BSCN</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Dennis Nyakundi</h5>
                  <p className="text-primary">KRCN</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Emmah Nthenya</h5>
                  <p className="text-primary">Nutritionist</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Faith Ndirangu</h5>
                  <p className="text-primary">Nutritionist</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Caroline Wangechi</h5>
                  <p className="text-primary">HRIO</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Esther Njeri</h5>
                  <p className="text-primary">HRIO</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Feddaris Munguti</h5>
                  <p className="text-primary">Front Office</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Zadik Kemboi</h5>
                  <p className="text-primary">Lab Tech</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Vincent Mutuku</h5>
                  <p className="text-primary">Lab Tech</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Adamson Wanjiku</h5>
                  <p className="text-primary">Accounts</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Anne Mwarari</h5>
                  <p className="text-primary">Lab Tech</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-4.jpg" alt="" /> */}
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Caroline Kilonzo</h5>
                  <p className="text-primary">Cateress</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      <>
        <Footer />
      </>
    </div>
  );
};

export default page;
