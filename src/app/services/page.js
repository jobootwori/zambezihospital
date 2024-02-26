import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import About from "../../components/About";
import CoreValues from "../../components/CoreValues";
const page = () => {
  return (
    <>
      <>
        <Header />
        <PageHeader pageTitle="Our services" />
       
      </>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default page;
