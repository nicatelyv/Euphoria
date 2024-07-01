import React from 'react'
import pdMidStyle from './PdMiddleContainer.module.scss'
import pdvideoimg from "/img/DetailPageimgs/pdvideoimg.png";

const PdMiddleContainer = () => {
  return (
    <div className={pdMidStyle.pdMiddleContainer}>
        <div className={pdMidStyle.pdmiddleleft}>
          <div className={pdMidStyle.pdh2holder}>
            <div className={pdMidStyle.pdProductdescdiv} ></div>
            <h2>Product Description</h2>
          </div>
          <div
            className={pdMidStyle.pddesccommans}
            style={{ display: "flex", gap: "27px", marginBottom: "40px" }}
          >
            <div className={pdMidStyle.pddesc}>
              <span>Description</span>
            </div>
            <div
              className={pdMidStyle.pdusercomm}
              style={{ display: "flex", gap: "10px" }}
            >
              <span>User comments</span>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#8A33FD",
                  color: "white",
                  fontSize: "11px",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                21
              </div>
            </div>
            <div
              className={pdMidStyle.pdqueans}
              style={{ display: "flex", gap: "10px" }}
            >
              <span>Question & Answer</span>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#3C4242",
                  color: "white",
                  fontSize: "11px",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                4
              </div>
            </div>
          </div>
          <div className={pdMidStyle.pdmiddlefttext} style={{marginBottom: "35px"}}>
            100% Bio-washed Cotton – makes the fabric extra soft & silky.
            Flexible ribbed crew neck. Precisely stitched with no pilling & no
            fading. Provide all-time comfort. Anytime, anywhere. Infinite range
            of matte-finish HD prints.
          </div>
          <div className={pdMidStyle.pdclothestyle}>
            <div>
              <p>Fabric</p>
              <p>Bio-washed Cotton</p>
            </div>
            <div>
              <p>Pattern</p>
              <p>Printed</p>
            </div>
            <div>
              <p>Fit</p>
              <p>Regular-fit</p>
            </div>
            <div>
              <p>Neck</p>
              <p>Round Neck</p>
            </div>
            <div>
              <p>Sleeve</p>
              <p>Half-sleeves</p>
            </div>
            <div>
              <p>Style</p>
              <p>Casual Wear</p>
            </div>
          </div>
        </div>
        <div className={pdMidStyle.pdmiddleright}>
          <img src={pdvideoimg} alt="video" />
        </div>
    </div>
  )
}

export default PdMiddleContainer