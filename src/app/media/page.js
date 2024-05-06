"use client";
import React from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Image from "next/image";
import Footer from "../../components/Footer";

const page = () => {
  const items = [
    {
      id: 1,
      src: "/img/media/2.jpg",
      link: "link here",
    },
    {
      id: 2,
      src: "/img/media/3.jpg",
      link: "link here",
    },
    {
      id: 3,
      src: "/img/media/4.jpg",
      link: "link here",
    },
    {
      id: 4,
      src: "/img/media/5.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/7.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/8.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/9.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/10.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/11.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/12.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/13.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/14.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/15.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/16.jpg",
      link: "link here",
    },
  ];
  return (
    <>
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
      {/* <!-- Spinner End --> */}

      <Header />
      <PageHeader pageTitle="Media Gallery" />

      {/* <div className="max-w-screen-lg flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full h-full"> */}
      {/* <div className="container-xxl py-5"> */}
      {/* <div className="container"> */}
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:px-5"> 
              {items.map(({ id, src, link }) => (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
                >
                  <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 500 + "px" }}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={400}
                      height={300}
                      className="rounded-md duration-200 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
             </div> */}
      {/*  </div> */}
      {/* </div> */}
      {/* </div> */}

      {items.map(({ id, src, link }) => (
        <div
          key={id}
          className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
        >
          <div
            className="col cols-5 center-items mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 + "px" }}
          >
            <img
              src={src}
              alt=""
              // width={0}
              // height={0}
              className="rounded-md duration-200 hover:scale-105"
              style={{ maxWidth: "100%", height: "auto",objectFit: "contain" }}
            />
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default page;
