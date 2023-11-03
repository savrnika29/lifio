import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import system_CSAT from "../Images/Other UI Assets/0V9ciy5g 1.png";
import cdd1 from "../Images/Website UI Icons/PNG/Prone to errors due to its manual nature.png";
import cdd2 from "../Images/Website UI Icons/PNG/Ineffective utilization  of expert’s time.png";
import cdd3 from "../Images/Website UI Icons/PNG/ime consuming training.png";
import cdd4 from "../Images/Other UI Assets/mapping.png";
import cdd5 from "../Images/Other UI Assets/drag and drop.png";
import cdd6 from "../Images/Other UI Assets/download mapping.png";
import cdd8 from "../Images/Other UI Assets/content recommendation.png";
import cdd10 from "../Images/Banner/SDTMapping.png";
import cdd11 from "../Images/Otherassets/key benefits 2.png";


const SDTM = () => {
  return (
    <div>
      <section class="banner-sdtm">
        <div>
          <div class="row ">
            <div class="col-sm-8">
              <div class="product-text px-lg-5">
                <h3>Study Data Tabulation Model (SDTM) Mapping</h3>
                <p>
                  Transforming the clinical trial data to meet the CDISC SDTM
                  standards
                </p>
                <button class="btn btn-submit">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="row m-0 py-5 align-items-center justify-content-between ">
          <div className="col-sm-6">
            <div class="product-text px-lg-5">
              <p>
                Lifio’s SDTM Mapping Tool is a cloud-based solution which
                leverages the power of Natural Language Processing (NLP) and
                Machine Learning (ML) to automatically map source (EDC, Lab,
                etc.) variables to the target SDTM standards using the SDTM
                implementation guide. It allows users to customize recommended
                auto mapping with SDTM variables and mapping algorithms. It is a
                smart tool that can self-learn changes made to the mapping by
                users, thereby improving with time.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="cdd-doc-image">
              <img src={system_CSAT} alt="" />
              <h1>2 weeks </h1>
              <p>to complete SDTM programming</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <h3 className="head-cdd py-5">Current Challenges</h3>
        <div className="row mx-0 justify-content-center">
          <div className="col-sm-3">
            <div className="box-items-about-2">
              <img src={cdd1} alt="" />
              <p>Prone to errors due to its manual nature</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="box-items-about-2">
              <img src={cdd2} alt="" />
              <p>
                Complex processes that often require mapping with multiple
                domains
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="box-items-about-2">
              <img src={cdd3} alt="" />
              <p>
                Time consuming training and upskilling of resources in
                accordance with the CDISC SDTM standards
              </p>
            </div>
          </div>
        </div>
      </section>
     <section className="mx-5">
        <h3 className="head-cdd py-5">Key benefits</h3>
        <div className="text-center mx-5">
          <img className="w-full" src={cdd11} alt="" />
        </div>
      </section>
       <section className="mx-5">
        <h3 className="head-cdd py-5">Key Features</h3>
          <div className="keyfeature">
          <div className="cards-cdd-box-1 p-3 ">
            <div className="row align-items-center">
              <div className="col-sm-3">
                <p className="px-3">Mapping</p>
              </div>
              <div className="col-sm-9">
                <img className="w-full" src={cdd4} />
              </div>
            </div>
          </div>
          <div className="cards-cdd-box-1 p-3  ">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <img className="w-full" src={cdd5} />
              </div>
              <div className="col-sm-4">
                <p className="px-3">
                  Drag-and-drop mapping feature and customizable mapping
                  algorithms
                </p>
              </div>
            </div>
          </div>

          <div className="cards-cdd-box-1 p-3 ">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <p className="px-3">Can download SDTM Mapping Specification</p>
              </div>
              <div className="col-sm-8">
                <img className="w-full" src={cdd6} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-lg-5">
        <h3 className="head-cdd py-lg-5">Benefits</h3>
        <div className="row mx-lg-5 pb-5">
          <div className="col-sm-3 mb-4">
            <div className="benfits-cdd">
              <div>
                <h4> 01 </h4>
                <p>
                  NLP and ML-based auto mapping that reduces manual effort by
                  85%
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-4">
            <div className="benfits-cdd">
              <div>
                <h4> 02</h4>
                <p>One-time effort of training the ML model</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-4">
            <div className="benfits-cdd">
              <div>
                <h4>03</h4>
                <p> ML algorithm that assists in managing complex mappings</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-4">
            <div className="benfits-cdd">
              <div>
                <h4>04</h4>
                <p>
                  Generates executable code (SAS and R) which reduces the effort
                  required in double programming
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-lg-5 my-lg-5 py-5">
        <h3 className="head-cdd py-5 mb-5">Process Flow</h3>
        <div className="text-center mx-5">
          <img className="w-full" src={cdd10} alt="" />
        </div>
      </section>
      <section className="text-center mb-5 m-3">
        <div class="product-text ">
          <p>Want to try our product?</p>
          <button class="btn btn-submit">Request a Demo</button>
        </div>
      </section>
    </div>
  );
};

export default SDTM;
