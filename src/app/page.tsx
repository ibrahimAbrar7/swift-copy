import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import HeaderOne from "./components/HeaderOne";
import HeaderTwo from "./components/HeaderTwo";
import HeroSection from "./components/HeroSection";
import Service from "./components/Services";

export default function Home() {
  return (
    <>
      <HeaderOne />
      <HeaderTwo />
      <HeroSection />
      <About />
      <Service />
      <Footer />
      <BackToTop />
    </>
  );
}
