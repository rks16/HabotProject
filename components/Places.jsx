import React from "react";
import "../components/css/Places.css";

const Places = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="left">
          <h3>
            Ready to dive into <span id="hb">HABOT?</span>
          </h3>
          <p className="my-4">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>

          <button type="button" class="btn btn-success fw-bold mt-2" id="plc">
            Sign up Today ! <span className="mx-2 fs-4">&#8594;</span>
          </button>
        </div>

        <div className="right">

        <div class="grid">

            <div class="grid-item">Abu Dhabi</div>
            <div class="grid-item">Dubai</div>
            <div class="grid-item">Sharjah & Ajman</div>
            <div class="grid-item">Fujairah</div>
            <div class="grid-item">Ras Al Khaimah</div>
            <div class="grid-item">Umm Al Quwain</div>

        </div>

      </div>

        </div>
    
    </div>
  );
};

export default Places;






