import React from "react";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import Header from "../../components/Header";
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
      <PageHeader pageTitle="Our Books" />
      {/* <!-- The Author Start --> */}
      <div
        className="container-fluid donate my-5 py-5"
        data-parallax="scroll"
        data-image-src="img/carousel-2.jpg"
      >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-16 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                The Author
              </div>

              <p className="text-white-50 mb-0">
                <b>Dr. Geoffrey Zambezi Mutuma </b>is a Medical Practitioner,
                Consultant Clinical Pathologist, and Specialist in Forensic
                Pathology with special interest in Cancer control, prevention,
                registration and surveillance. He has a solid base in both
                academic and practical medical experience have trained in a
                Bachelor Degree in Medicine and Bachelor Degree in Surgery
                (MBChB) – University of Nairobi; Master of Medicine in Human
                Pathology and Medical Microbiology (M.Med (Path) – University of
                Nairobi and a Diploma in Forensic Medicine – The Royal College
                of Pathologists of Australia (Dip. Forensic. Med (RCPA) -
                Australia. He has other academic qualifications, he holds a
                Diploma in Medical Jurisprudence – The Society Apothecaries of
                London (D.M.J)-UK, a Diploma in Principles and Practice of
                Cancer Prevention and Control – Bethesda-Mary Land-USA; a
                Certificate in Cancer Registration, Surveillance and Control –
                Emory University Atlanta- Georgia- USA; a Certificate in
                Clinical Immunology of Infectious Diseases and Introduction to
                Molecular Biology – Suez Canal University, Ismailia, Egypt. He
                is a fellow and Life Member- International Cancer Transfer
                Fellowships (ICRETT), in Cancer Research – UK (UICC) -
                International Union against Cancer.
              </p>
              <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
              <p className="text-white-50 mb-0">
                He is also a foundation Member- the Royal College of Physicians
                of London, Faculty of Forensic and Legal Medicine and a
                reviewer- International Union against Cancer for the grants
                applications for International Cancer Technology Transfer
                Fellowships (ICRETT). He honed his skills for a number of years
                having worked as chief Government Pathologist (Head of
                Medico-Legal Services), Provincial Pathologist in Eastern
                Province, Medical Officer of Health (M.O.H), Machakos District,
                and Medical Supretentendant at Machakos Provincial General
                Hospital – Ministry of Health Kenya. And a director of National
                Cancer Registry, Started Nairobi Cancer Registry, Chairman of
                the National Non- Communicable Diseases Research Programme,
                Principal Research Officer – Kenya Medical Research Institute.
                Currently he is the Chief Executive Officer and Consultant
                Clinical Pathologist of The Zambezi Hospital
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- The Author End --> */}
      {/* Books Start */}
      <div className="row g-4 justify-content-center">
        {/* Book One start */}

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
            <Image
              className="img-fluid mb-4"
              src="/img/bookImage.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 100 + "px", height: "auto" }}
              alt=""
            />
            <h4 className="mb-3">
              Introduction to Forensic Medicine and Pathology
            </h4>
            <p className="mb-4">
              Dr. G.Z. Mutuma - <i>First Edition</i>
            </p>
            <a
              className="btn btn-outline-primary px-3"
              href="/books/FINAL FORENSIC BOOK.pdf"
            >
              Download
              <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                <i className="fa fa-arrow-down"></i>
              </div>
            </a>
          </div>
        </div>
        {/* Book one end */}
        {/* Book Two start */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
            <Image
              className="img-fluid mb-4"
              src="/img/bookImage.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 100 + "px", height: "auto" }}
              alt=""
            />
            <h4 className="mb-3">Non Communicable Diseases</h4>
            <p className="mb-4">
              <br />
              Dr. G.Z. Mutuma - <i>First Edition</i>
            </p>
            <a
              className="btn btn-outline-primary px-3"
              href="/books/NCD FINAL 2023 FEB.pdf"
            >
              Download
              <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                <i className="fa fa-arrow-down"></i>
              </div>
            </a>
          </div>
        </div>
        {/* Book Two end */}
      </div>
      {/* Books End */}
      <Footer />
    </div>
  );
};

export default page;
