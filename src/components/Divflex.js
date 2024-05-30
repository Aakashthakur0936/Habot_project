import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import "./Divflex.css";
import MenuIcon from '@mui/icons-material/Menu';
import TopDrawer from "./drawer";

const Divflex = ({ className = "" }) => {
  return (
    <header className={`divflex ${className}`}>
      <img
        className="image-1-icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <div className="frame-group">
        <div className="find-suppliers-wrapper">
          <a className="find-suppliers">Find Suppliers</a>
        </div>
        <div className="frame-wrapper">
          <FormControl
            className="parent"
            variant="standard"
            sx={{
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              height: "24px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "24px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "24px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#6d6e71",
                fontSize: 14.3,
                fontWeight: "Regular",
                fontFamily: "Poppins",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="16px" height="16px" src="/svg.svg" style={{}} />
              )}
            >
              <MenuItem>Find Service Tags</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <Button
          className="button"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00732f",
            fontSize: "15",
            borderColor: "#00732f",
            borderRadius: "5px",
            "&:hover": { borderColor: "#00732f" },
            height: 50,
          }}
        >
          Login / Sign Up
        </Button>
      </div>
      <div className="menu-icon-box">
 
      <TopDrawer />
      </div>
    </header>
  );
};

// Divflex.propTypes = {
//   className: PropTypes.string,
// };

export default Divflex;
