import React from "react";
import bigzoneStyle from "./bigzone.module.css";
import { IoIosArrowRoundDown } from "react-icons/io";
// import fontStyle from "../font/font.css";

function BigZone() {
  return (
    <div className={bigzoneStyle.container}>
      <div className={bigzoneStyle.text}>
        <div className={bigzoneStyle.before}></div>
        <h2>Big Saving Zone</h2>
      </div>
      <div className={bigzoneStyle.first}>
        <div className={bigzoneStyle.bigzone1}>
          <div className={bigzoneStyle.zoneText}>
            <h4>Hawaiian Shirts</h4>
            <span>Dress up in summer vibe</span>
            <p>UPTO 50% OFF</p>
            <IoIosArrowRoundDown style={{ fontSize: "3em" }} />
            <br />
            <button>shop now</button>
          </div>
        </div>
        <div className={bigzoneStyle.bigzone2}>
          <div className={bigzoneStyle.zoneText} id={bigzoneStyle.right}>
            <button className={bigzoneStyle.limited}>limited stack</button>
            <h4>
              Printed <br /> T-Shirt
            </h4>
            <span>Dress up in summer vibe</span>
            <p>UPTO 50% OFF</p>
            <IoIosArrowRoundDown style={{ fontSize: "3em" }} />
            <br />
            <button>shop now</button>
          </div>
        </div>
        <div className={bigzoneStyle.bigzone3}>
          <div className={bigzoneStyle.zoneText3}>
            <h4>Hawaiian Shirts</h4>
            <span>Dress up in summer vibe</span>
            <p>UPTO 50% OFF</p>
            <IoIosArrowRoundDown style={{ fontSize: "3em" }} />
            <br />
            <button>shop now</button>
          </div>
        </div>
      </div>
      <div className={bigzoneStyle.second}>
        <div className={bigzoneStyle.bigzone4}>
          <div className={bigzoneStyle.zoneText4}>
            <h4>Urban Shirts</h4>
            <span>Live In Confort</span>
            <p>FLAT 60% OFF</p>
            <IoIosArrowRoundDown style={{ fontSize: "3em" }} />
            <br />
            <button>shop now</button>
          </div>
        </div>
        <div className={bigzoneStyle.bigzone5}>
          <div className={bigzoneStyle.zoneText5}>
            <h4>Oversized T-Shirts</h4>
            <span>Street Style Icon</span>
            <p>FLAT 60% OFF</p>
            <IoIosArrowRoundDown style={{ fontSize: "3em" }} />
            <br />
            <button>shop now</button>
          </div>
        </div>
      </div>
      <div className={bigzoneStyle.third}>
        <div className={bigzoneStyle.bigzone6}>
          <div className={bigzoneStyle.bigzone6Text}>
            <h4>WE MADE YOUR EVERYDAY FASHION BETTER!</h4>
            <span>
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </span>
            <button>shop now</button>
          </div>
        </div>
        <div className={bigzoneStyle.bigzone7}></div>
      </div>
    </div>
  );
}

export default BigZone;
