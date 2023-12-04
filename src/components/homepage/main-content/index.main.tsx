"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import { Settings } from "react-slick";
interface IProps {
  data: ITrackTop[];
  title: string;
}
const MainContentHomePage = (props: IProps) => {
  const { data, title } = props;
  console.log(
    "🚀 ~ file: index.main.tsx:18 ~ MainContentHomePage ~ data:",
    data
  );

  const NextArrow = (props: any) => {
    return (
      <Button
        color="inherit"
        variant="contained"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          right: 0,
          top: "35%",
          zIndex: 2,
          padding: 0,
          minWidth: 35,
        }}
      >
        <ChevronRightIcon />
      </Button>
    );
  };

  const PrevArrow = (props: any) => {
    return (
      <Button
        color="inherit"
        variant="contained"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          top: "35%",
          zIndex: 2,
          padding: 0,
          minWidth: 35,
        }}
      >
        <ChevronLeftIcon />
      </Button>
    );
  };

  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const renderSliderData = () => {
    return (
      <Slider {...settings}>
        {data
          ? data.map((item) => (
              <div key={item._id}>
                <div className="track">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}images/${item.imgUrl}`}
                    alt={title}
                  />
                  <h4 className="font-bold">{item.title}</h4>
                  <h5 className="font-normal">{item.description}</h5>
                </div>
              </div>
            ))
          : null}
      </Slider>
    );
  };

  return (
    <Box
      sx={{
        margin: "0px 50px",
        ".track": {
          padding: "0px 10px 45px 0px",
          margin: "20px 0px",
          img: {},
        },
        h3: {
          border: "1px solid #ccc",
          padding: "20px",
          height: "200px",
        },
      }}
    >
      <span className="font-bold text-[20px] "> {title} </span>
      {data && renderSliderData()}
      <Divider />
    </Box>
  );
};

export default MainContentHomePage;
