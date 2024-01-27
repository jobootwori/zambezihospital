import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        {/*-- JavaScript Libraries */}
        <Script async src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script async  src="lib/wow/wow.min.js" />
        <Script async  src="lib/easing/easing.min.js" />
        <Script async  src="lib/waypoints/waypoints.min.js" />
        <Script async  src="lib/owlcarousel/owl.carousel.min.js" />
        <Script async  src="lib/parallax/parallax.min.js" />

        {/* Template Javascript */}
        <Script async  src="js/main.js" />
        <Script async  src="js/scripts.js" />
      </>
    );
  }