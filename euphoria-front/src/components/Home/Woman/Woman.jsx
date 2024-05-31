import React from "react";
import womanStyle from "./woman.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

const Woman = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1600, // XL
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280, // L
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1210, // M
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820, // S
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={womanStyle.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={womanStyle.before}></div>
        <h2>Categories for Woman</h2>
      </div>
      <Slider {...settings}>
        <div className={womanStyle.card}>
          <div className={womanStyle.img1}></div>
          <div className={womanStyle.text}>
            <div>
              <h5>Boxers</h5>
              <span>Explore Now</span>
            </div>
            <IoIosArrowRoundForward
              style={{ fontSize: "2em", color: "#7F7F7F", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={womanStyle.card}>
          <div className={womanStyle.img2}></div>
          <div className={womanStyle.text}>
            <div>
              <h5>Tees & T-Shirt</h5>
              <span>Explore Now</span>
            </div>
            <IoIosArrowRoundForward
              style={{ fontSize: "2em", color: "#7F7F7F", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={womanStyle.card}>
          <div className={womanStyle.img3}></div>
          <div className={womanStyle.text}>
            <div>
              <h5>Coats & Parkas</h5>
              <span>Explore Now</span>
            </div>
            <IoIosArrowRoundForward
              style={{ fontSize: "2em", color: "#7F7F7F", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={womanStyle.card}>
          <div className={womanStyle.img4}></div>
          <div className={womanStyle.text}>
            <div>
              <h5>Hoodies & Sweatshirt</h5>
              <span>Explore Now</span>
            </div>
            <IoIosArrowRoundForward
              style={{ fontSize: "2em", color: "#7F7F7F", cursor: "pointer" }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Woman;
