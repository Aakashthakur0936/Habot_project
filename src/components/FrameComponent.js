import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`habot-child ${className}`}>
      <div className="frame-parent6">
        <div className="frame-wrapper3">
          <div className="frame-parent7">
            <div className="heading-2-what-we-offer-wrapper">
              <b className="heading-2">How it works?</b>
            </div>
            <p className="buyers-post-their">
              Buyers post their needs and review top suppliers, while suppliers
              complete profiles, connect with potential buyers, and build
              successful business relationships, sharing valuable feedback.
            </p>
          </div>
        </div>
        <div className="main-section-section-parent">
          <div className="main-section-section">
            <div className="main-section-section-inner">
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/group-33.svg"
              />
            </div>
            <h3 className="heading-3">Select Your Role and Sign Up</h3>
          </div>
          <div className="main-section-section1">
            <div className="document-1-1-wrapper">
              <img
                className="document-1-1"
                loading="lazy"
                alt=""
                src="/document-1-1.svg"
              />
            </div>
            <h3 className="heading-31">Buyers Post Your Requirements</h3>
          </div>
          <div className="main-section-section2">
            <div className="layer-x0020-1-wrapper">
              <img
                className="layer-x0020-1-icon"
                loading="lazy"
                alt=""
                src="/layer-x0020-1.svg"
              />
            </div>
            <p className="heading-32">
              {" "}
              Review, Select, and Contact the Best Suppliers
            </p>
          </div>
          <div className="main-section-section3">
            <div className="edit-1-1-wrapper">
              <img
                className="edit-1-1"
                loading="lazy"
                alt=""
                src="/edit-1-1@2x.png"
              />
            </div>
            <p className="heading-33">
              {" "}
              Suppliers Complete your profile and get notified for opportunities
            </p>
          </div>
          <div className="main-section-section4">
            <div className="quote-request-1-wrapper">
              <img
                className="quote-request-1-icon"
                loading="lazy"
                alt=""
                src="/quoterequest-1.svg"
              />
            </div>
            <p className="heading-34">
              Contact to Buyers and Share your Quote for the service
            </p>
          </div>
          <div className="main-section-section5">
            <div className="group-wrapper">
              <img className="group-icon" alt="" src="/group-1.svg" />
            </div>
            <p className="heading-35">
              Both the Parties can Connect and Make Business Leave a Feedback
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FrameComponent.propTypes = {
//   className: PropTypes.string,
// };

export default FrameComponent;
