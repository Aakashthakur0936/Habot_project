import { Button } from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`frame-container ${className}`}>
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="ready-to-dive-into-habot-parent">
            <b className="ready-to-dive-container">
              <span className="ready-to-dive-container1">
                <span>{`Ready to dive into `}</span>
                <span className="habot1">HABOT?</span>
              </span>
            </b>
            <div className="signup-content">
              <p className="signing-up-with">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </p>
            </div>
          </div>
          <Button
            className="button1"
            endIcon={<img width="32px" height="16.1px" src="/group.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#00732f",
              border: "#00732f solid 1px",
              borderRadius: "5px",
              "&:hover": { background: "#00732f" },
              width: 317,
              height: 54,
            }}
          >
            Sign up Today !
          </Button>
        </div>
        <div className="frame-wrapper1">
          <div className="group-div">
            <div className="divflex-parent">
              <div className="divflex1">
                <div className="abu-dhabi">Abu Dhabi</div>
              </div>
              <div className="divflex2">
                <div className="abu-dhabi1">Dubai</div>
              </div>
            </div>
            <div className="divflex-group">
              <div className="divflex3">
                <div className="abu-dhabi2">{`Sharjah & Ajman`}</div>
              </div>
              <div className="divflex4">
                <div className="abu-dhabi3">Fujairah</div>
              </div>
            </div>
            <div className="divflex-container">
              <div className="divflex5">
                <div className="abu-dhabi4">Ras Al Khaimah</div>
              </div>
              <div className="divflex6">
                <div className="abu-dhabi5">Umm Al Quwain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FrameComponent2.propTypes = {
//   className: PropTypes.string,
// };

export default FrameComponent2;
