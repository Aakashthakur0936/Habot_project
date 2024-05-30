import { Button } from "@mui/material";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`verification-wrapper-wrapper ${className}`}>
      <div className="verification-wrapper">
        <div className="verification-wrapper-inner">
          <div className="verification-heading-parent">
            <div className="verification-heading">
              <div className="let-suppliers-find">Let Suppliers Find You</div>
              <div className="verified-badge-wrapper">
                <div className="verified-badge" />
              </div>
            </div>
            <div className="up-1-1" />
          </div>
        </div>
        <Button
          className="button2"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#eb7150",
            borderRadius: "5px",
            "&:hover": { background: "#eb7150" },
            width: 216,
            height: 54,
          }}
        >
          Get Verified
        </Button>
      </div>
    </section>
  );
};

// FrameComponent1.propTypes = {
//   className: PropTypes.string,
// };

export default FrameComponent1;
