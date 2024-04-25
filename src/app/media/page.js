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
      src: "/img/media/2.jpg",
      link: "link here",
    },
    {
      id: 3,
      src: "/img/media/2.jpg",
      link: "link here",
    },
    {
      id: 4,
      src: "/img/media/2.jpg",
      link: "link here",
    },
    {
      id: 5,
      src: "/img/media/2.jpg",
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
      <div className="row g-4 justify-content-center">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:px-5">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
