import React from "react";
import system_CSAT from "../Images/png/Icons System_automation.png";
import system_CSAT1 from "../Images/png/Icons System_CSAT.png";
import cdd4 from "../Images/Other UI Assets/DCP/landing page after login.png";
import cdd5 from "../Images/Other UI Assets/DCP/study management.png";
import cdd6 from "../Images/Other UI Assets/DCP/site management.png";
import cdd7 from "../Images/Other UI Assets/DCP/user management.png";
import cdd8 from "../Images/Other UI Assets/DCP/roles and resposibility.png";
import cdd9 from "../Images/Other UI Assets/DCP/subject enrolment.png";
import cdd10 from "../Images/Other UI Assets/DCP/data entry dashboard.png";
import cdd11 from "../Images/Other UI Assets/DCP/data entry screen.png";
import cdd12 from "../Images/Other UI Assets/DCP/query management.png";
import cdd13 from "../Images/Other UI Assets/DCP/query workbench.png";
import cdd14 from "../Images/Other UI Assets/DCP/data download options.png";
import ecrf_designer from "../Images/Website UI Icons/PNG/ecrf designer.png";
import Data_Integration from "../Images/Website UI Icons/PNG/Data Integration.png";
import System_digital_data from "../Images/png/Icons System_digital data.png";
import Query_management from "../Images/Website UI Icons/PNG/Query management.png";
import Medical_Coding from "../Images/Website UI Icons/PNG/Medical Coding.png";
import Data_Management from "../Images/Website UI Icons/PNG/Data Management.png";
import sdtm_cdisc from "../Images/Website UI Icons/PNG/sdtm integration cdisc.png";
import Data_Extraction from "../Images/Website UI Icons/PNG/Data Extraction.png";

const DCP = () => {
  return (
    <div>
      <section class="banner-cdd">
        <div>
          <div class="row ">
            <div class="col-sm-8">
              <div class="product-text px-lg-5">
                <h3>Data Capture Platform (DCP)</h3>
                <p>
                  An Electronic Data Capture (EDC) system is software that
                  stores patient data collected in clinical trials.
                </p>
                <button class="btn btn-submit">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="row m-0 py-5 align-items-center justify-content-between ">
          <div className="col-sm-7">
            <div class="product-text px-lg-5">
              <p>
                Lifio’s Data Capture platform is a cloud-based clinical data
                management system used to electronically capture, manage, and
                report clinical research data. It enables the user to record
                patient information (i.e., visit, lab, and adverse event data)
                using forms that are customized for each study. Lifio’s Data
                Capture platform accelerates the speed of the clinical trial by
                reducing deployment time, capturing data faster, timely study
                close-out, and early database lock – all in a cost-effective
                manner while providing the highest data quality, integrity, and
                security.
              </p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="cdd-doc-image">
              <img src={system_CSAT} alt="" />
              <h1>1 month </h1>
              <p>to go live with your study</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 py-5">
        <h3 className="head-cdd py-5">Key Features</h3>

        <div className="keyfeature mb-5">
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <h4 className="px-3">Landing Page</h4>
                <p className="px-3">
                  The distinctive yet user-friendly main page of Lifio’s Data
                  Capture platform makes it stand out. This provides links to
                  all the functionalities and a single page view for all the
                  options.
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
                <h4 className="px-3">Study Management</h4>
                <p className="px-3">
                  Create and edit a clinical trial in just a few seconds. It’s
                  as simple as it gets to integrate with Lifio’s internal
                  Clinical Study Automation Tool (CSAT) and external tool.
                </p>
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <h4 className="px-3">Site Management</h4>
                <p className="px-3">
                  Add all your clinical sites using our DCP, easy and quick to
                  way create the sites and link them to different trials.
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
                <h4 className="px-3">User Management</h4>
                <p className="px-3">
                  Several users with different roles in several clinical trials,
                  manage all the user management related tasks with a breeze.
                </p>
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <h4 className="px-3">Roles and Resposibility</h4>

                <p className="px-3">
                  Adherence to the compliance is the most important aspects of
                  the clinical trials, roles and responsibilities are one of
                  those. Manage users and their responsibilities in few click
                  with DCP.
                </p>
              </div>
              <div className="col-sm-7">
                <img className="w-full" src={cdd8} />
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-7">
                <img className="w-full" src={cdd9} />
              </div>
              <div className="col-sm-5">
                <h4 className="px-3">Subject Enrolment</h4>
                <p className="px-3">
                  Enrol, edit and search clinical trial subjects within the same
                  screen. In-built validation to check duplicate enrolment.
                  Lifio’s DCP includes every aspect.
                </p>
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <h4 className="px-3">Data Entry Dashboard</h4>

                <p className="px-3">
                  Quick and on-time data Entry in clinical trials is crucial.
                  With the help of our user- friendly dashboard, quickly see
                  what is happening with data entry at each site.
                </p>
              </div>
              <div className="col-sm-7">
                <img className="w-full" src={cdd10} />
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-7">
                <img className="w-full" src={cdd11} />
              </div>
              <div className="col-sm-5">
                <h4 className="px-3">Data Entry Screen</h4>
                <p className="px-3">
                  The ease of data entry directly relates to how quickly it is
                  completed. The task is made easy for the sites by
                  user-friendly data entering windows. Our DCP can integrate
                  data from several sources, such as excel, pdf, etc. The tool
                  captures audit information, comments, allows image upload,
                  lock/freeze, SDV and much more.
                </p>
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <h4 className="px-3">Query Management</h4>

                <p className="px-3">
                  Quicker and cleaner the data, faster the database lock.
                  Lifio’s DCP has in-built, and no coding edit checks for rapid
                  study go-live.
                </p>
              </div>
              <div className="col-sm-7">
                <img className="w-full" src={cdd12} />
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-7">
                <img className="w-full" src={cdd13} />
              </div>
              <div className="col-sm-5">
                <h4 className="px-3">Query Workbench</h4>
                <p className="px-3">
                  Your go to place for all the queries across the sites. Search,
                  sort and hyperlink gives easy access to view and address the
                  queries.
                </p>
              </div>
            </div>
          </div>
          <div className="cards-cdd-box p-3">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <h4 className="px-3">Data Download Options</h4>

                <p className="px-3">
                  Monitor and analyse your data on a real time basis with DCP’s
                  standard reports along with a one click download option.
                </p>
              </div>
              <div className="col-sm-7">
                <img className="w-full" src={cdd14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 py-5">
        <h3 className="head-cdd py-5">Data Capture Platform Process</h3>

        <div className="row justify">
          <div className="col">
            <div className="platfrom-cards">
              <div>
                <img src={ecrf_designer} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>eCRF Designer </h5>
              <p>AL/ML based automated eCRF Designer standard library</p>
            </div>
          </div>
          <div className="col">
            <div className="platfrom-cards">
              <div>
                <img src={Data_Integration} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>Edit check configuration </h5>
              <p>No-code edit check setup</p>
            </div>
          </div>
          <div className="col">
            <div className="platfrom-cards">
              <div>
                <img src={System_digital_data} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>Data Integration </h5>
              <p> External data integration import multiple subject data</p>
            </div>
          </div>
          <div className="col">
            <div className="platfrom-cards">
              <div>
                <img src={Query_management} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>Data Entry </h5>
              <p> Capturing subject data source data verification</p>
            </div>
          </div>
          <div className="col">
            <div className="platfrom-cards">
              <div>
                <img src={Query_management} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>Query Management </h5>
              <p> Query workflow auto & manual queries</p>
            </div>
          </div>
        </div>
        <div className="row justify mx-lg-5 px-lg-5">
          <div className="col-sm-3">
            <div className="platfrom-cards">
              <div>
                <img src={Medical_Coding} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>Medical Coding </h5>
              <p>Dictionaries & versioning auto & interactive coding</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="platfrom-cards">
              <div>
                <img src={Data_Management} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>Data Management</h5>
              <p>Monitor & DM locks site, subject, study looks</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="platfrom-cards">
              <div>
                <img src={sdtm_cdisc} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>SDTM Integration </h5>
              <p> SDTM domains integration SDTM SAS/R executable program</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="platfrom-cards">
              <div>
                <img src={Data_Extraction} alt="" />
              </div>
            </div>
            <div className="data-capture-text">
              <h5>Data Extraction </h5>
              <p> SAS raw datasets subject case book extraction</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mb-5 py-5 m-2">
        <div class="product-text ">
          <p>Want to try our product?</p>
          <button class="btn btn-submit">Request a Demo</button>
        </div>
      </section>
    </div>
  );
};

export default DCP;
