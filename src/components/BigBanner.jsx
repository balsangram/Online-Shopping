import React from "react";
import video from "../images/banner.mp4";
function BigBanner() {
  return (
    <>
      <div className="BigBanner">
        <video className="BigBanner_video" src={video} autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div> {/* Dark overlay */}
        <div className="video-content">
          <h1>
            Style Speaks Louder Than Words
            <br /> Discover Your Perfect Look!
          </h1>
          {/* <p>Enjoy our amazing content!</p> */}
        </div>
      </div>
    </>
  );
}

export default BigBanner;
