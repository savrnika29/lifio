import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import system_CSAT from "../Images/png/Icons System_CSAT.png";
import cdd1 from "../Images/Website UI Icons/PNG/Inability to get real-time, actionable insights.png";
import cdd2 from "../Images/Website UI Icons/PNG/Ineffective utilization  of expert’s time.png";
import cdd3 from "../Images/Website UI Icons/PNG/High manual administrative effort.png";
import cdd4 from "../Images/Other UI Assets/knowledge graph database.png";
import cdd5 from "../Images/Other UI Assets/protocol analyise.png";
import cdd6 from "../Images/Other UI Assets/protocol extraction.png";
import cdd7 from "../Images/Other UI Assets/review checklist.png";
import cdd8 from "../Images/Other UI Assets/content recommendation.png";
import cdd9 from "../Images/Other UI Assets/medical writer.png";
import cdd10 from "../Images/Otherassets/tool process.png";
import Group from "../Images/Otherassets/Group.png";


const CDD = () => {
  return (
    <div>
      <section class="banner-cdd">
        <div>
          <div class="row ">
            <div class="col-sm-8">
              <div class="product-text px-lg-5">
                <h3>Clinical Document Digization(CDD)</h3>
                <p>
                  transforming Clinical trial documents into digital formats for
                  better Analystics and insights{" "}
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
                Lifio's document digitization tool is a cloud-based solution
                which provides a holistic end-to-end analysis of the clinical
                study protocol. This tool leverages Natural Language Processing
                (NLP) and Machine Learning (ML) to extract content, summarize
                relevant sections from the clinical protocols and stores them in
                a structured format on a database to reduce manual effort and
                streamline the downstream processes.
              </p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="cdd-doc-image">
              <img src={system_CSAT} alt="" />
              <h1>1 week </h1>
              <p>to create clinical documents</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <h3 className="head-cdd py-5">Current Challenges</h3>
        <div className="row mx-0 justify-content-center">
          <div className="col-sm-3 mb-3">
            <div className="box-items-about-1">
              <img src={cdd1} alt="" />
              <p>Inability to get real-time, actionable insights</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="box-items-about-1">
              <img src={cdd2} alt="" />
              <p>Ineffective utilization of expert’s time</p>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="box-items-about-1">
              <img src={cdd3} alt="" />
              <p>High manual administrative effort</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5">
        <h3 className="head-cdd py-5">Key benefits</h3>
        <div className="text-center mx-5">
          <img className="w-full" src={Group} alt="" />
        </div>
      </section>

      <section className="mx-lg-5">
        <h3 className="head-cdd py-5">Key Features</h3>

        <div className="keyfeature">
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <p className="px-3">
                  <b> A knowledge graph database</b> that gives a 360-degree
                  view of the document
                </p>
              </div>
              <div className="col-sm-7">
                <img className="w-full" src={cdd4} />
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-7">
                <img className="w-full" src={cdd5} />
              </div>
              <div className="col-sm-5">
                <p className="px-3">
                  <b> Protocol Analytics</b> that help the team analyze and
                  relate information between multiple protocols
                </p>
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <p className="px-3">
                  <b> Protocol extractions</b> wherein the tool extracts related
                  information based on the table of contents in the protocol
                </p>
              </div>
              <div className="col-sm-7">
                <img className="w-full" src={cdd6} />
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-7">
                <img className="w-full" src={cdd7} />
              </div>
              <div className="col-sm-5">
                <p className="px-3">
                  <b> Protocol Review Checklist</b> that allows reviewing the
                  contents of the protocol and highlights any potentially
                  misleading information
                </p>
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <p className="px-3">
                  <b> A content recommendation</b> engine for the creation of
                  new protocols that uses the existing knowledge base of all
                  protocols across similar Therapeutic and Indication using the
                  TransCelerate common protocol template
                </p>
              </div>
              <div className="col-sm-7">
                <img className="w-full" src={cdd8} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-lg-5 my-5 py-5">
        <h3 className="head-cdd py-lg-5 mb-5">Process Flow</h3>
            <div className="text-center mx-lg-5 mx-2">
                <img className="w-full" src={cdd10} alt="" />
            </div>
      </section>

      <section className="mx-lg-5">
        <h3 className="head-cdd py-5">Benefits</h3>
        <div className="row mx-lg-5 pb-lg-5">
          <div className="col-sm-3 mb-3">
            <div className="benfits-cdd">
              <div>
                <h4> 01 </h4>
                <p>
                  Real-time insights owing to structured digitized content in a
                  query-able format
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="benfits-cdd">
              <div>
                <h4> 02</h4>
                <p>Optimal use of skilled resources</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="benfits-cdd">
              <div>
                <h4>03</h4>
                <p>
                  {" "}
                  Analytics tailored to the needs of users from different
                  department
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="benfits-cdd">
              <div>
                <h4>04</h4>
                <p>
                  Quick and reliable aggeration of related content across the
                  protocol
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-lg-5 my-5">
        <h3 className="head-cdd py-5">Role Based Benefits</h3>

        <Tabs
          defaultActiveKey="statistician"
          transition={false}
          className="mb-5 tab-box justify-content-center border-0 mx-3"
        >
          <Tab eventKey="statistician" title="Statistician">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <div>
                  <h4>Statistician</h4>
                  <p>
                    The tool enables biostatisticians to understand the previous
                    trial designs and helps in determining the sample size and
                    statistical analysis for better results.
                  </p>
                </div>
              </div>
              <div className="col-sm-8">
                <div>
                  <img src={cdd9} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="medical" title="Medical Writer ">
            asdasdasas
          </Tab>
          <Tab eventKey="data" title="Data Management"></Tab>
        </Tabs>
      </section>
    </div>
  );
};

export default CDD;
