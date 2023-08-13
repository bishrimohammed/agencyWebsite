import React from "react";
import "./feature.css";
import image11 from "../assets/Appdata-cuate.png";
import image22 from "../assets/Website setup-cuate (2).png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";
import image10 from "../assets/10.png";
import { Stack, ListItem, ListItemAvatar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

const Feature = () => {
  return (
    <div className="feature position-relative   py-5">
      <div className="container-lg container-fluid d-flex flex-column position-relative">
        <div className="customer">
          <div className="content">
            <div className="customer-text text-center">
              <h1>join our 100+ happy cumstomers</h1>
            </div>
            <div className="icon-list py-4 px-3 d-flex flex-wrap align-item-center">
              <ThemeProvider theme={theme}>
                <Stack
                  spacing={{ xs: 2, sm: 2 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                >
                  <img src={image1} alt="" className="icon-logo" />

                  <img src={image2} alt="" className="icon-logo" />

                  <img src={image3} alt="" className="icon-logo" />

                  <img src={image4} alt="" className="icon-logo" />

                  <img src={image5} alt="" className="icon-logo" />

                  <img src={image6} alt="" className="icon-logo" />

                  <img src={image7} alt="" className="icon-logo" />

                  <img src={image8} alt="" className="icon-logo" />

                  <img src={image9} alt="" className="icon-logo" />

                  <img src={image10} alt="" className="icon-logo" />
                </Stack>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className=" section">
          <h2 className="text-center text-blue">what We Do</h2>
          <h3 className="text-center text-white mb-4 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h3>
          <div className="list d-flex flex-sm-row flex-column ">
            <div className="coll h-100 me-lg-4 me-md-2 px-0 text-white ">
              <div className="card1 h-100 d-flex flex-column ">
                <div className="  py-lg-2 py-md-3 py-4 px-md-3 px-2">
                  <h1 className="">Lorem ipsum dolor sit amet</h1>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum.
                  </p>
                </div>
                <div className="bg-white flex-grow-1">
                  <img className="img-fluid " src={image11} alt="Title" />
                </div>
              </div>
            </div>

            <div className="coll me-lg-4 me-md-2 me-2 px-0 text-white ">
              <div className="card1 h-100 d-flex flex-column ">
                <div className=" py-lg-2 py-md-3 py-4 px-md-4 px-4">
                  <h1 className="title mb-sm-1 mb-2">
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum.
                  </p>
                </div>
                <div className="bg-white mt-lg-5 mt-md-3">
                  <img className="img-fluid  " src={image22} alt="Title" />
                </div>
              </div>
            </div>
            <div className="coll collLast px-0 mb-4 text-white text-center">
              <div className="card1 h-100 d-flex flex-column ">
                <div className="  py-lg-2 py-md-3 py-4 px-md-3 px-2">
                  <h1 className="title mb-sm-1 mb-2">
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum.
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

export default Feature;
