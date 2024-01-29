import Image from "next/image";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Causes from "@/components/Causes";
import Service from "@/components/Service";
import Donate from "@/components/Donate";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
      {/* <!-- Spinner End --> */}
      <Header />
      <Carousel />
      <About />
      <Causes />
      <Service />
      {/* <Donate /> */}
      {/* <Team /> */}
      {/* <Testimonial /> */}
      <Footer />
    </main>
  );
}
