import { useState } from "react";
import "./VideoBuyer.css";
import ReactPlayer from "react-player";

const VideoBuyer = ({ className = "" }) => {
  const [showUnderLine, setShowUnderLine] = useState(false);
  const toggleUnderLine = () => {
    setShowUnderLine(!showUnderLine);
  };

  return (
    <div className={`video-buyer ${className}`}>
      <div className="i8tgrhxx4oq-sd-1-parent">
        <ReactPlayer url="https://youtu.be/Lv24RpKyw1Q" controls />
        {/* <img
          className="i8tgrhxx4oq-sd-1-icon"
          alt=""
          src="/i8tgrhxx4oqsd-1@2x.png"
        /> */}
        {/* <div className="control-background-parent">
          <div className="control-background" />
          <img className="play-icon" loading="lazy" alt="" src="/vector.svg" />
        </div> */}
      </div>
      <div className="video-buyer-inner">
        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="frame-parent4" onClick={() => toggleUnderLine()}>
              <div
                className={
                  !showUnderLine ? "buyer-wrapper" : "supplier-wrapper"
                }
              >
                <b className="buyer">Buyer</b>
              </div>
              {!showUnderLine && <div className="testimonial-background" />}
            </div>
            <div className="frame-parent4" onClick={() => toggleUnderLine()}>
              <div
                className={showUnderLine ? "buyer-wrapper" : "supplier-wrapper"}
              >
                <b className="buyer">Supplier</b>
              </div>
              {showUnderLine && <div className="testimonial-background" />}
            </div>
            {/* <div className="supplier-wrapper">
              <b className="supplier">Supplier</b>
            </div> */}
          </div>
          <div className="frame-parent5">
            <div className="frame-wrapper2">
              <div className="checked-2-1-parent">
                <div className="buyer-supplier-points">
                  <img
                    className="checked-2-1"
                    loading="lazy"
                    alt=""
                    src="/checked-2-1.svg"
                  />
                  <p className="post-your-requirements">
                    Post your requirements.
                  </p>
                </div>
                <div className="buyer-supplier-points">
                  <img
                    className="checked-2-2"
                    loading="lazy"
                    alt=""
                    src="/checked-2-1.svg"
                  />
                  <p className="sit-back-for">
                    Sit back for multiple suppliers to contact you.
                  </p>
                </div>
                <div className="buyer-supplier-points">
                  <img
                    className="checked-2-3"
                    loading="lazy"
                    alt=""
                    src="/checked-2-1.svg"
                  />
                  <p className="choose-among-the">
                    Choose among the suppliers based on the ratings and reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// VideoBuyer.propTypes = {
//   className: PropTypes.string,
// };

export default VideoBuyer;
