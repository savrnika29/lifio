import React from "react";
import logo from "../Images/Banner/logo.png"

function Footer(props) {
  return (
    <div>
      <section className="section-padding footer-mid pt-5">
        <div className="mx-lg-5 pt-15 pb-20">
          <div className="row justify-content-between">
            <div className="col-sm-3">
              <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                <div className="logo mb-30">
                  <a className="navbar-brand" href="#">
                    <img src={logo} />
                  </a>
                  <p className="font-lg text-heading mt-3">
                    Lifio has an innovative AI-driven SaaS platform that
                    leverages Artificial Intelligence (AI), Machine Learning
                    (ML), Nature Language Processing (NLP) and deep learning to
                    automate certain processes of clinical trials
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row">
                <div className="footer-link-widget col-sm-4">
                  <h4 className="widget-title">TOOLS</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">Clinical Digital Document</a>
                    </li>
                    <li>
                      <a href="#">Clinical Study Automation Tool (CSAT)</a>
                    </li>
                    <li>
                      <a href="#">SDTM Mapping</a>
                    </li>
                    <li>
                      <a href="#">Data Capture Platform (DCP)</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-widget col-sm-4">
                  <h4 className="widget-title">SERVICES</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">Metadata Libary</a>
                    </li>
                    <li>
                      <a href="#">EDC Builds</a>
                    </li>
                    <li>
                      <a href="#">CRF Design</a>
                    </li>
                    <li>
                      <a href="#">SAS SDTM Programming</a>
                    </li>
                    <li>
                      <a href="#">Data Transformation</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-widget col-sm-4">
                  <h4 className="widget-title">IMPORTANT LINKS</h4>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Tools</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Blogs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright text-center mb-0 pb-3">
          Copyright 2022 Liflo Inc. All rights reserved
        </p>
      </section>
    </div>
  );
}

export default Footer;
