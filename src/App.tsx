import { useState } from "react";
import SplashScreen from "./components/splash-screen";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import Discography from "./components/discography";
import FanArtGallery from "./components/fan-art-gallery";
import AboutSection from "./components/about-section";
import TimelineSection from "./components/timeline-section";
import QuotesSection from "./components/quotes-section";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

      <Navbar />
      <HeroSection />
      <AboutSection />
      <Discography />
      <FanArtGallery />
      <TimelineSection />
      <QuotesSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
