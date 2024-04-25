'use client';
import React from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Image from "next/image";

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
      <Header />
      <PageHeader pageTitle="Media Gallery" />
      <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen text-center md:text-left">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Title{" "}
            </p>
            <p className="py-6">subtitle</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5">
            {items.map(({ id, src, link }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex justify-center mt-4">
                  <button
                    className="flex-1 px-6 py-3 m-2 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Button 1
                  </button>
                  <button
                    className="flex-1 px-6 py-3 m-2 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Button 2
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
