import { useState, useEffect } from "react";
import SplashScreen from "./components/splash-screen";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import FanArtGallery from "./components/fan-art-gallery";
import AboutSection from "./components/about-section";
import TimelineSection from "./components/timeline-section";
import QuotesSection from "./components/quotes-section";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  // Block body scroll during splash screen
  useEffect(() => {
    if (!splashDone) {
      // Disable scrolling during splash
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling after splash
      document.body.style.overflow = "";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [splashDone]);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <Discography /> */}
      <FanArtGallery />
      <TimelineSection />
      <QuotesSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
