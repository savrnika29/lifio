import React, { useState } from "react";
import { toast } from "react-toastify";
import OwlCarousel from "react-owl-carousel";
import service1 from "../Images/png/Icons System_Passion.png";
import service2 from "../Images/png/Icons System_Data analysis.png";
import service3 from "../Images/png/Icons System_drung development.png";
import service4 from "../Images/png/Icons System_Clinical MDR.png";
import service5 from "../Images/png/Icons System_Visual define xml editor.png";
import butterfy from "../Images/png/Butterfly-wings-flap-unscreen.gif";
import hand from "../Images/Banner/Light-brown-in-Basic5.png";
import axios from "axios";

const Home = () => {
  const [help_me, setHelp_me] = useState("");
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("help_me", help_me);
    data.append("full_name", full_name);
    data.append("subject", subject);
    data.append("email", email);
    data.append("query", query);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://54.185.55.214:8000/api/add_leave_message/",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success("SuccessFull");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("falied " + error.message);
      });
  };

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3.5,
      },
    },
  };
  return (
    <>
      <div>
        <section class="py-5 banner-home">
          <div class="row m-0 py-5 justify-content-between">
            <div class="col-sm-4 p-0">
              <div class="banner-box-amin">
                <img src={hand} class="w-full" />
                <img class="butter-box" src={butterfy} />
              </div>
            </div>
            <div class="col-sm-7 mt-5">
              <h4 class="mt-5">
                Creating ground-breaking innovations to help Pharma companies
                bring life-saving drugs to market faster.
              </h4>
              <button class="btn btn-submit">Read More</button>
            </div>
          </div>
        </section>

        <section class="container py-5">
          <div class="row m-0 py-5 justify-content-between">
            <div class="col-sm-6">
              <div className="service-text">
                <p>
                  PROBLEM <img src={butterfy} />
                </p>
                <h3>
                  Today, most of the key processes in clinical trials are done
                  manually, which is not only time consuming but is also not the
                  best use of skilled resources.
                </h3>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="problem-box">
                <div class="problem-cards">
                  <h2>01 </h2>
                  <p>
                    Lack of digitized format of key critical clinical trial
                    documents like Study Protocol. Stellsecel Analysis Plan
                    (SAM. ClinIcal Study Report (CSR).
                  </p>
                </div>
                <div class="problem-cards">
                  <h2>02 </h2>
                  <p>
                    Slutly build normally takes .0.12-10 weeks to 90 Ilve.
                    involving skilled reeouroes to design the eCPF based on the
                    complexity of the protocol
                  </p>
                </div>
                <div class="problem-cards">
                  <h2>03 </h2>
                  <p>
                    SDTM mappfng iS 8 .mPleX process that often req.,. mapping
                    WO mullIple domains. The task is manual and dependent on the
                    knowledge and efficiency of the people undertaking the task,
                    thus taking lime and more Rely to prone to won.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mx-lg-5 text-center py-5">
          <div class="solution-box py-lg-5 px-lg-5">
            <div class="service-text px-lg-5">
              <p className="mb-lg-3 mb-0">
                SOLUTION
                <img src={butterfy} />
              </p>
              <h3>
                With our Al-driven SaaS platform, Life Sciences companies will
                be able to save significant time and cost, as well as improve
                quality which is required to build, manage and conduct
                successful trials.
              </h3>
            </div>
          </div>
        </section>

        <section className="bg-box-main">
          <section class="container py-5">
            <div class="row py-5 justify-content-between">
              <div class="col-sm-6 ">
                <div className="service-text">
                  <p>
                    TOOLS <img src={butterfy} />
                  </p>
                  <h3>
                    Our tools helps at every step of the clinical trial from
                    protocal Creation to publication
                  </h3>
                  <button class="view-product btn px-5 mt-3">
                    View all Products
                  </button>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="tools-seconds">
                  <div class="cards-tools">
                    <h4>Clinical Digital Document (CDD)</h4>
                    <p>
                      Transforming clinical trial documents into digital formats
                      for botta Anelyti. end Insights
                    </p>
                  </div>
                  <div class="cards-tools">
                    <h4>Clinical Study Automation Tool (CSAT)</h4>
                    <p>
                      An and-to-and plationrn In deSign and develOP all.
                      components of a clinical study build process in a single
                      click
                    </p>
                  </div>
                  <div class="cards-tools">
                    <h4>Data Capture Platform (DCP)</h4>
                    <p>
                      Transloming the clini.ltrial clata to TOM
                      the.1.50TM.a.arcls
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="text-center py-5">
            <div class="service-text text-center">
              <p>
                SERVICE WE OFFER <img src={butterfy} />
              </p>
              <h3>We innovate with data.</h3>
              <h3>So that your clinical trials conclude faster.</h3>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              {...options}
            >
              <div class="item">
                <div>
                  <img src={service1} />
                  <h4 class="mb-3">
                    Metatlata Library Creation <br /> for all therapeutic areas
                  </h4>
                  <button class="btn btn-submit" type="submit">
                    Know More
                  </button>
                </div>
              </div>
              <div class="item">
                <div>
                  <img src={service2} />

                  <h4 class="mb-3">
                    EDO builds for
                    <br /> clinical trials
                  </h4>
                  <button class="btn btn-submit" type="submit">
                    Know More
                  </button>
                </div>
              </div>
              <div class="item">
                <div>
                  <img src={service5} />

                  <h4 class="mb-3">
                    CRF Design. edit check <br /> specs & programmer
                  </h4>
                  <button class="btn btn-submit" type="submit">
                    Know More
                  </button>
                </div>
              </div>

              <div class="item">
                <div>
                  <img src={service4} />

                  <h4 class="mb-3">
                    SAS SDTM <br /> programming
                  </h4>
                  <button class="btn btn-submit" type="submit">
                    Know More
                  </button>
                </div>
              </div>

              <div class="item">
                <div>
                  <img src={service3} />

                  <h4 class="mb-3">
                    Data transformation <br /> in SDTM formats
                  </h4>
                  <button class="btn btn-submit" type="submit">
                    Know More
                  </button>
                </div>
              </div>
            </OwlCarousel>

            <button class="view-product btn px-5 mt-5">
              View all Products
            </button>
          </section>

          <section class="container py-5">
            <div className="row m-0 justify-content-between py-5">
              <div className="col-sm-5">
                <div className="service-text">
                  <p>
                    Contact us <img src={butterfy} />
                  </p>
                  <h3>
                    If you're in the race to get lifesaving drugs to market
                    faster, consider us as the wings beneath your feet.
                  </h3>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="contanct-form">
                  <h5 class="mb-5"> Leave a Message</h5>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="What can i help you with  "
                        onChange={(e) => setHelp_me(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) => setFull_name(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Subject "
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your Message"
                        onChange={(e) => setQuery(e.target.value)}
                        required
                      />

                      <div class="text-end">
                        <button class="btn btn-submit px-5">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Home;
