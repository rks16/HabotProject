import React from "react";
import '../components/css/Footer.css';
import logo from '../assets/logo2.png';
import Ln from '../assets/Social/LinkedIn.png';
import Tw from '../assets/Social/Twitter.png';
import Fb from '../assets/Social/Facebook.png';
import Ig from '../assets/Social/Instagram.png';





const Footer = () => {
  return (
    <div>
      <footer class="footer text-white pt-4">
        <div class="container">
            <hr />
          <div class="row">
            <div class="col-md-2 mb-3 mt-4">
              <img src={logo} alt="logo"  width={"150px"}/>
            </div>
            <div class="col-md-2 mb-3">
              <h5>Company</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 mb-3">
              <h5>Terms</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                   Data Privacy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                  Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 mb-3">
              <h5>Related</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                   Find Buyer
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 mb-3 ml-5 d-flex align-items-center">
              <ul class="list-unstyled d-flex gap-3">
                <li class="mr-3">
                  <a href="#">
                    <img
                      src={Ln}
                      alt="LinkedIn"
                      width="32"
                    />
                  </a>
                </li>
                <li class="mr-3">
                  <a href="#">
                    <img
                      src={Tw}
                      alt="Twitter"
                      width="32"
                    />
                  </a>
                </li>
                <li class="mr-3">
                  <a href="#">
                    <img
                      src={Fb}
                      alt="Facebook"
                      width="32"
                    />
                  </a>
                </li>
                <li class="mr-3">
                  <a href="#">
                    <img
                      src={Ig}
                      alt="Medium"
                      width="32"
                    />
                  </a>
                </li>
              </ul>
            </div>
          <hr />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
