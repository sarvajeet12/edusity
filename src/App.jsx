import React, { useState } from "react";
import Navbar from "./components/navBar/Navbar";
import HeroSection from "./components/sectionHero/HeroSection";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";
import { Contact } from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Video from "./components/videoPlayer/Video";

const App = () => {
  const [video, setVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container">
        <Title subTitle="our program" title="what we offer" />
        <Programs />
        <About setVideo={setVideo} />
        <Title subTitle="gallery" title="campus photos" />
        <Campus />
        <Title subTitle="testimonials" title="what students says" />
        <Testimonials />
        <Title subTitle="contact us" title="get in touch" />
        <Contact />
        <Footer />
      </div>
      <Video video={video} setVideo={setVideo} />
    </div>
  );
};

export default App;
