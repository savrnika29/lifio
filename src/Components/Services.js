import React from "react";
import serviceimage1 from "../Images/service/CRF Design.jpg";
import serviceimage2 from "../Images/service/ METADATA LIBRARY.jpg";
import serviceimage3 from "../Images/service/DATA TRANSFORMATION.jpg";
import serviceimage4 from "../Images/service/EDC CLINICAL TRIALS.png";
import serviceimage5 from "../Images/service/SAS.png";
import butterfy from "../Images/png/Butterfly-wings-flap-unscreen.gif";

function Services() {
  return (
    <div>
      <section class="banner-services">
        <div>
          <div class="row justify-content-end">
            <div class="col-sm-6">
              <div class="product-text px-lg-5">
                <h3>Services we offer</h3>
                <p>
                  Our team of experts is capable of handling all activities
                  related to clinical trials from a domain and technology
                  perspective. We facilitate end-to-end processes in the
                  clinical trial space.
                </p>
                <button class="btn btn-submit">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="cards-sevices mx-lg-5 my-20 m-3">
          <div class="row  align-items-center">
            <div class="col-sm-6 px-lg-5 pt-3 ">
              <div class="product-text px-lg-5">
                <h3>Metadata Library Creation for all therapeutic areas</h3>
                <img class="box" src={butterfy} />

                <p>
                  Lifio recognizes the value in maintaining organizational
                  knowledge and skills deployed in the development of standards,
                  thus, we design and reuse the metadata libraries for the
                  purpose of uniformity and comprehensiveness.
                </p>
              </div>
            </div>
            <div class="col-sm-6 p-0">
              <div className="service-images-box">
                <img className="w-full" src={serviceimage2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="cards-sevices mx-lg-5 my-20 m-3">
          <div class="row  align-items-center">
            <div class="col-sm-6 p-0">
              <div className="service-images-box-1">
                <img className="w-full" src={serviceimage4} alt="" />
              </div>
            </div>
            <div class="col-sm-6 px-lg-5 pt-3 ">
              <div class="product-text px-lg-5">
                <h3>EDC Builds for clinical trials</h3>
                <img class="box" src={butterfy} />

                <p>
                  A comprehensive master data management solution that includes
                  all entities from drug discovery to drug commercialization. It
                  includes mastering the medicinal product that is primarily
                  focused on IDMP compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="cards-sevices mx-lg-5 my-20 m-3">
          <div class="row  align-items-center">
            <div class="col-sm-6 px-lg-5 pt-3 ">
              <div class="product-text px-lg-5">
                <h3>CRF design, edit check specs & programming</h3>
                <img class="box" src={butterfy} />

                <p>
                  The Clinical Study Automation System from Lifio makes use of
                  AI approaches to quickly generate case report forms, edit
                  check specifications, and create test cases.
                </p>
              </div>
            </div>
            <div class="col-sm-6 p-0">
              <div className="service-images-box">
                <img className="w-full" src={serviceimage1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="cards-sevices mx-lg-5 my-20 m-3">
          <div class="row  align-items-center">
            <div class="col-sm-6 p-0">
              <div className="service-images-box-1">
                <img className="w-full" src={serviceimage5} alt="" />
              </div>
            </div>
            <div class="col-sm-6 px-lg-5 pt-3 ">
              <div class="product-text px-lg-5">
                <h3>SAS SDTM Programming</h3>
                <img class="box" src={butterfy} />

                <p>
                  Lifio’s SDTM Mapping Tool is a cloud-based solution which
                  leverages the power of natural language processing (NLP) and
                  machine learning (ML) to automatically map source (EDC, Lab,
                  etc.) variables to the target SDTM standards using the SDTM
                  implementation guide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="cards-sevices mx-lg-5 my-20 m-3">
          <div class="row  align-items-center">
            <div class="col-sm-6 px-lg-5 pt-3 ">
              <div class="product-text px-lg-5">
                <h3>Data transformation in SDTM formats</h3>
                <img class="box" src={butterfy} />

                <p>
                  A Comprehensive master data management solution that includes
                  all entities from drug discovery to drug commercialization. It
                  includes mastering the medicinal product that is primarily
                  focused on IDMP compliance.
                </p>
              </div>
            </div>
            <div class="col-sm-6 p-0">
              <div className="service-images-box">
                <img className="w-full" src={serviceimage3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mb-5">
        <div class="product-text ">
          <p>Want to try our product?</p>
          <button class="btn btn-submit">Request a Demo</button>
        </div>
      </section>
    </div>
  );
}

export default Services;
