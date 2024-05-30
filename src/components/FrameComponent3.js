import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`offer-heading-wrapper ${className}`}>
      <div className="offer-heading">
        <div className="are-you-a-supplier-explore-ma-parent">
          <h1 className="are-you-a-container">
            <p className="are-you-a-supplier">
              <b>Are You a Supplier?</b>
            </p>
            <p className="explore-matching-opportunities">
              Explore Matching Opportunities.
            </p>
          </h1>
          <form className="form-parent">
            <TextField
              className="form"
              placeholder="Search your required service here"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="21px" height="21px" src="/suitcase-1.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d1d5db" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#fff",
                  paddingLeft: "20px",
                  borderRadius: "5px",
                  fontSize: "15.1px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "16px",
                  color: "#6b7280",
                },
              }}
            />
            <TextField
              className="form1"
              placeholder="Search your desired location here"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="23px" height="23px" src="/placeholder-1.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d1d5db" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#fff",
                  paddingLeft: "15px",
                  borderRadius: "5px",
                  fontSize: "15.1px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "11px",
                  color: "#6b7280",
                },
              }}
            />
            <div className="form-button-wrapper">
              <Button
                className="form-button"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "15.1",
                  background: "#00732f",
                  border: "#00732f solid 1px",
                  borderRadius: "5px",
                  "&:hover": { background: "#00732f" },
                  height: 54,
                }}
              >
                Search
              </Button>
            </div>
          </form>
        </div>
        <div className="are-you-a-buyer-click-here-if-wrapper">
          <p className="are-you-a-container1">
            <span className="are-you-a-container2">
              <b className="are-you-a">{`Are you a buyer?   `}</b>
              <span className="click-here-if">
                Click here if you are looking to post a requirements
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

// FrameComponent3.propTypes = {
//   className: PropTypes.string,
// };

export default FrameComponent3;
