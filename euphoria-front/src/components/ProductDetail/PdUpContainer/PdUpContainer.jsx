import React from 'react'
import pdUpStyle from './PdUpContainer.module.scss'
import ravenhoodieblack from "/img/DetailPageimgs/ravenhoodieblack.png";
import leftstroke from "/img/DetailPageimgs/left (Stroke).png";
import stars from "/img/DetailPageimgs/pdStar.png";
import messageicon from "/img/DetailPageimgs/messageIcon.png";
import pdarrow from "/img/DetailPageimgs/pdarrow.png";
import pdcartbtn from "/img/DetailPageimgs/pdcartbtn.png";
import pdsecpay from "/img/DetailPageimgs/pdsecpay.png";
import pdfreeship from "/img/DetailPageimgs/pdfreeship.png";
import pdsizefit from "/img/DetailPageimgs/pdsizefit.png";
import pdfreeret from "/img/DetailPageimgs/pdfreeret.png";
import Slider from "react-slick";
import pdsliderimg1 from "/img/DetailPageimgs/pdsliderimg1.png";
import pdsliderimg2 from "/img/DetailPageimgs/pdsliderimg2 (2).png";
import pdsliderimg3 from "/img/DetailPageimgs/pdsliderimg3.png";

const PdUpContainer = () => {

    function SampleArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              width: "20px",
              height: "20px",
              fontSize: "20px",
              textAlign: "center",
              position: "absolute",
              top: "103%",
              right: "42%",
              transform: "rotate(-90deg)",
              display: "block",
              background: "gray",
              borderRadius: "100%",
            }}
            onClick={onClick}
          />
        );
      }
    
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              width: "20px",
              height: "20px",
              fontSize: "20px",
              textAlign: "center",
              position: "absolute",
              top: "114%",
              left: "30%",
              transform: "rotate(-90deg)",
              display: "block",
              background: "gray",
              borderRadius: "100%",
            }}
            onClick={onClick}
          />
        );
      }
    
      var settings = {
        vertical: true,
        verticalSwiping: true,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div className={pdUpStyle.upContainer}>
        <div className={pdUpStyle.pdImages}>
          <div className={pdUpStyle.pdLeftImg}>
            <div className={pdUpStyle.pdSliderContainer}>
              <Slider {...settings} className={pdUpStyle.pdsldr}>
                <div className={pdUpStyle.pdSlider}>
                  <img src={pdsliderimg1} alt="sliderimg" />
                </div>
                <div className={pdUpStyle.pdSlider}>
                  <img src={pdsliderimg2} alt="sliderimg" />
                </div>
                <div className={pdUpStyle.pdSlider}>
                  <img src={pdsliderimg3} alt="sliderimg" />
                </div>
              </Slider>
            </div>
          </div>
          <div className={pdUpStyle.pdRightImg}>
            <img
              src={ravenhoodieblack}
              alt="ravenhoodieblack"
            />
          </div>
        </div>
        <div className={pdUpStyle.pdTexts}>
          <div className={pdUpStyle.pdInTexts}>
            <div className={pdUpStyle.pdtextlinks}>
              <span>Shop</span>
              <img src={leftstroke} alt="leftstroke" />
              <span>Women</span>
              <img src={leftstroke} alt="leftstroke" />
              <span>Top</span>
            </div>
            <p className={pdUpStyle.pdInTextsp}>
              <p>Raven Hoodie With</p>
              <p>Black colored Design</p>
            </p>
            <div className={pdUpStyle.pdStarsComments}>
              <div className={pdUpStyle.pdStars}>
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <span>3.5</span>
              </div>
              <div className={pdUpStyle.pdComments}>
                <img src={messageicon} alt="messageicon" />
                <span>120 comment</span>
              </div>
            </div>
            <div className={pdUpStyle.pdsizes}>
              <div className={pdUpStyle.inpdsizes}>
                <span>Select Size</span>
                <div className={pdUpStyle.arrowandsp}>
                  <span>Size Guide</span>
                  <img src={pdarrow} alt="arrow" />
                </div>
              </div>
              <div className={pdUpStyle.sizes}>
                <input type="button" value="XS" />
                <input type="button" value="S" />
                <input type="button" value="M" />
                <input type="button" value="L" />
                <input type="button" value="XL" />
              </div>
              <div className={pdUpStyle.colors}>
                <p>Colours Available</p>
                <div className={pdUpStyle.inputs}>
                  <label htmlFor="blackradiobtn">
                    <input
                      className={pdUpStyle.blackinput}
                      type="radio"
                      id="blackradiobtn"
                      name="color"
                    />
                    <span
                      className={pdUpStyle.custom_radio}
                      style={{ backgroundColor: "#3C4242" }}
                    ></span>
                  </label>
                  <label htmlFor="yellowradiobtn">
                    <input
                      className={pdUpStyle.yellowinput}
                      type="radio"
                      id="yellowradiobtn"
                      name="color"
                    />
                    <span
                      className={pdUpStyle.custom_radio}
                      style={{ backgroundColor: "#EDD146" }}
                    ></span>
                  </label>
                  <label htmlFor="pinkradiobtn">
                    <input
                      className={pdUpStyle.pinkinput}
                      type="radio"
                      id="pinkradiobtn"
                      name="color"
                    />
                    <span
                      className={pdUpStyle.custom_radio}
                      style={{ backgroundColor: "#EB84B0" }}
                    ></span>
                  </label>
                  <label htmlFor="redradiobtn">
                    <input
                      className={pdUpStyle.redinput}
                      type="radio"
                      id="redradiobtn"
                      name="color"
                    />
                    <span
                      className={pdUpStyle.custom_radio}
                      style={{ backgroundColor: "#9C1F35" }}
                    ></span>
                  </label>
                </div>
              </div>
              <div className={pdUpStyle.cartprice}>
                <button>
                  <img src={pdcartbtn} alt="cartbutton" />
                  <span>Add to cart</span>
                </button>
                <button>
                  <span>$63.00</span>
                </button>
              </div>
              <hr />
              <div className={pdUpStyle.pdshippinginfo}>
                <div>
                  <img src={pdsecpay} alt="icon" />
                  <span>Secure payment</span>
                </div>
                <div>
                  <img src={pdsizefit} alt="icon" />
                  <span>Size & Fit</span>
                </div>
                <div>
                  <img src={pdfreeship} alt="icon" />
                  <span>Free shipping</span>
                </div>
                <div>
                  <img src={pdfreeret} alt="icon" />
                  <span>Free Shipping & Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PdUpContainer