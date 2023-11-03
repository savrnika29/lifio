import React from "react";
import about1 from "../Images/png/Icons System_Openness & Pluggability.png";
import about2 from "../Images/png/Icons System_CHANNEL PARNER.png";
import about3 from "../Images/png/Icons System_Innovation.png";
import about4 from "../Images/png/Icons System_efficiency.png";
import butterfy from "../Images/png/Butterfly-wings-flap-unscreen.gif";

function About(props) {
  return (
    <div>
      <section class="banner-aboutus">
        <div>
          <div class="row justify-content-end">
            <div class="col-sm-8">
              <div class="product-text px-lg-5">
                <h3>Lifio is another word for Life.</h3>
                <p>
                  And that’s all we focus on: we exist to improve the quality of
                  human life through digital transformation.
                </p>
  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-lg-5 text-center  py-lg-5 ">
        <div className="service-text py-lg-5 px-lg-5 px-3">
          <h3>
            Technology that accelerates clinical trials and research.
            <img src={butterfy} />
          </h3>
          <p>
            Bringing technological innovation with integrity for clinical
            research and trial companies. We’ve developed an AI-powered engine
            that has NLP and ML capabilities to actually build clinical trials
            faster. And this eventually, helps save more human lives.
          </p>
        </div>
        <div className="btn-box">
          <button class="btn btn-submit">Request a Demo</button>
          <button class="btn btn-primary">View Service</button>
        </div>
      </section>
      <section class="mx-lg-5 text-center py-lg-5">
        <div class="solution-box py-lg-5 px-lg-5">
          <div className="service-text px-lg-5">
            <p>
              VISION <img src={butterfy} />
            </p>
            <h3>
              Our vision is to save and improve human lives. We will do this by
              applying innovative technologies to accelerate go-to-market
              timelines for drugs, thus becoming an indispensable partner for
              clinical research and trial companies worldwide.
            </h3>
          </div>
        </div>
      </section>
      <section className="text-center py-5">
        <div className="service-text px-5">
          <p className="mb-5">
            OUR VALUES <img src={butterfy} />
          </p>
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col-sm-3">
            <div className="box-items-about">
              <img src={about1} alt="" />
              <p>
                We are innovators who <br /> will not sacrifice our <br />{" "}
                integrity.
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="box-items-about">
              <img src={about2} alt="" />
              <p>
                Our clients and their processes <br /> come first and foremost:
                <br />
                everything we do is designed <br /> with this objective
              </p>
            </div>
          </div>
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col-sm-3">
            <div className="box-items-about">
              <img src={about3} alt="" />
              <p>
                Our technology will always be the cutting-edge so that our
                clients remain at an advantage.
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="box-items-about">
              <img src={about4} alt="" />
              <p>
                Our clients and their processes come first and foremost:
                everything we do is designed with this objective
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center ">
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="service-text py-5 px-5">
              <h3>
                If you’re in the race to get lifesaving drugs to market faster,
                consider us as the wings beneath your feet.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mb-5 py-5">
        <div class="product-text ">
          <p>Want to try our product?</p>
          <button class="btn btn-submit">Request a Demo</button>
        </div>
      </section>
    </div>
  );
}

export default About;
