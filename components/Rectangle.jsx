import React from "react";
import backGround from "../assets/backGround.png";
import location from "/src/assets/location.svg";
import bfcase from "/src/assets/bfcase.svg";
import "/src/components/css/Rectangle.css";

const Rectangle = () => {
  return (
    <div>
      <div className="ig">
        <img src={backGround} alt="background-image" className="bgImg" />
      </div>

      <div className="overlay">
        <div className="content position-absolute">
          <h1>
            <span className="fw-bolder">Are you a Supplier?</span>
          </h1>
          <h1>Explore Matching Opportunities</h1>
        </div>

        <div className="ips">
          <div className="ip2 ip">
            <img src={location} alt="location" className="ig" width={"40px"} />
            <input
              type="text"
              placeholder="Search your required service here"
            />
          </div>

          <div className="ip1 ip">
            <img src={bfcase} alt="location" className="ig" width={"40px"} />
            <input
              type="text"
              placeholder="Search your required service here"
            />
          </div>

          <button type="button" className="btn btn-success" id="sch">
            Search
          </button>

          <div className="txtt">
            <p>Are you a Buyer?</p>
            <p>Click here if you are looking to post a requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
