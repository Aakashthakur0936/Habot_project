import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function TopDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 , bgcolor:"#fff"}}>
        <MenuIcon sx={{ fontSize: "2.3rem" }} onClick={toggleDrawer(true)} />
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {/* <StyledBox
          sx={{
            position: "absolute",
            bottom: -drawerBleeding,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "#fff" }}>51</Typography>
        </StyledBox> */}
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
        <Box sx={{
                            height:"100%",
                ".MuiSkeleton-root>*":{
                    visibility:"visible"
                }
            }}>

          <Skeleton
            variant="rectangular"
            height="100%"
            width={"100%"}
            sx={{ p: 2, }}
          >
            <Box sx={{

            }}>
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
                      <img
                        width="16px"
                        height="16px"
                        src="/svg.svg"
                        style={{}}
                      />
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
            </Box>
          </Skeleton>
        </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

// SwipeableEdgeDrawer.propTypes = {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
//   window: PropTypes.func,
// };

export default TopDrawer;
