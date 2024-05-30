import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="div-2joicxav">
        <div className="frame-parent8">
          <div className="frame-wrapper4">
            <div className="footer-div">
              <div>
                <img
                  // className="div-2naf1tmz-icon"
                  loading="lazy"
                  alt=""
                  src="/div-2naf1tmz.svg"
                  style={{width:"250px", height:"100px"}}
                />
                <div className="r-singhania">
                  <p className="r-singhania1">© R Singhania</p>
                </div>
              </div>
              <div className="developer-positions">
                <b className="related">Company</b>
                <div className="developer-positions-inner">
                  <div className="frame-parent10">
                    <div className="list-item-link-hire-free-parent">
                      <div className="list-item5">About</div>
                    </div>
                    <div className="list-item6">FAQ</div>
                  </div>
                </div>
              </div>
              <div className="developer-positions">
                <b className="related">Terms</b>
                <div className="developer-positions-inner">
                  <div className="frame-parent10">
                    <div className="list-item-link-hire-free-parent">
                      <div className="list-item5">Terms</div>
                    </div>
                    <div className="list-item6">Data privacy</div>
                    <div className="list-item6">Accessibility</div>
                  </div>
                </div>
              </div>
              <div className="developer-positions">
                <b className="related">Related</b>
                <div className="developer-positions-inner">
                  <div className="frame-parent10">
                    <div className="list-item-link-hire-free-parent">
                      <div className="list-item5">Find Buyer</div>
                    </div>
                    <div className="list-item6">Feedback</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="frame-parent9">
              <div className="heading-3-parent">
                <div className="heading-36">
                  <b className="company">Company</b>
                  <b className="terms">Terms</b>
                </div>
                <img
                  className="div-2naf1tmz-icon"
                  loading="lazy"
                  alt=""
                  src="/div-2naf1tmz.svg"
                />
                <a className="list-item">About</a>
                <div className="list-item1">FAQ</div>
                <div className="list-item2">Terms</div>
              </div>
              <div className="social-links-wrapper">
                <div className="social-links">
                  <div className="r-singhania">
                    <p className="r-singhania1">© R Singhania</p>
                  </div>
                  <div className="list-item-link-hire-free-wrapper">
                    <div className="list-item3">Accessibility</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="developer-positions">
            <b className="related">Related</b>
            <div className="developer-positions-inner">
              <div className="frame-parent10">
                <div className="list-item-link-hire-free-parent">
                  <div className="list-item4">Data privacy</div>
                  <div className="list-item5">Find Buyer</div>
                </div>
                <div className="list-item6">Feedback</div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="div-2joicxav-inner">
          <div className="item-link-linkedin-parent">
            <img
              className="item-link-linkedin"
              loading="lazy"
              alt=""
              src="/item--link--linkedin.svg"
            />
            <img
              className="item-link-twitter"
              loading="lazy"
              alt=""
              src="/item--link--twitter.svg"
            />
            <img
              className="item-link-facebook"
              loading="lazy"
              alt=""
              src="/item--link--facebook.svg"
            />
            <img
              className="item-link-instagram"
              loading="lazy"
              alt=""
              src="/item--link--instagram.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer.propTypes = {
//   className: PropTypes.string,
// };

export default Footer;
