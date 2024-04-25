import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Service from "../../components/Service";
import CoreValues from "../../components/CoreValues";
const page = () => {
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
      <>
        <Header />
        <PageHeader pageTitle="Our services" />
      </>

      <div>
        <Service />
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
                  Major Areas of Focus
                </div>
                <ul className="max-w-md space-y-1 text-white-50 list-none list-inside dark:text-gray-400">
                  <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                  <li>Cancer screening, Diagnosis and Treatment</li>

                  <li>Health and wellness programs to the community</li>
                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                  <li>Corporate health and wellness screening</li>
                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}

                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                  <li>
                    Well man, well woman screening clinic for non-communicable
                    diseases
                  </li>
                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                  <li>Youth health clinic</li>
                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                  <li>Internal medicine/ oncology</li>
                  <li>
                    Medical Laboratory services specialized in cancer diagnosis
                    (histology and cytology).
                  </li>

                  <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                </ul>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 bg-white p-5">
                  <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                    <li>General surgery</li>
                    {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                    <li>Maternal and child health</li>
                    {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                    <li>Cancer support groups center</li>
                    <li>
                      Consultation in Forensic Pathology and Medico-legal
                      service
                    </li>
                    <li>VCT</li>
                    <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                  </ul>
                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Donate End --> */}
        <Footer />
      </div>
    </>
  );
};

export default page;
