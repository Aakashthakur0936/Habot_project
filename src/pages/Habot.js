import Divflex from "../components/Divflex";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import VideoBuyer from "../components/VideoBuyer";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./Habot.css";

const Habot = () => {
  return (
    <div className="habot">
      <Divflex />
      <img
        className="hero-background-icon"
        alt=""
        src="/hero-background@2x.png"
      />
      <FrameComponent3 />
      <section className="habot-inner">
        <div className="frame-parent">
          <FrameComponent2 />
          <VideoBuyer />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Habot;
