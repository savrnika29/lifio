import React from "react";
import productimage1 from "../Images/Product/Product CDD.jpg";
import productimage2 from "../Images/Product/Product CSAT.jpg";
import productimage3 from "../Images/Product/Product DCP.jpg";
import productimage4 from "../Images/Product/Product SDTM.jpg";
import butterfy from "../Images/png/Butterfly-wings-flap-unscreen.gif";
import tick from "../Images/Banner/tick.png";

function Product() {
  return (
    <div className="body-product">
      <section class="banner-product">
        <div>
          <div class="row ">
            <div class="col-sm-7">
              <div class="product-text px-lg-5">
                <h3>Tools</h3>
                <p>
                  Our tool helps at every step of the clinical trial from
                  <b> protocol creation to publication.</b>
                </p>
                <button class="btn btn-submit">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="cards-sevices mx-5 my-20">
          <div class="row  align-items-center">
            <div class="col-sm-6 px-5">
              <div class="product-text px-lg-5">
                <h3>Clinical Document Digitization</h3>
                <img class="box" src={butterfy} />

                <p>
                  Lifio’s Clinical Document Digitization tool is a cloud- based
                  solution which provides a holistic end-to-end analysis of the
                  clinical study protocol.
                </p>
                <div className="product-list-points">
                  <div className="my-5">
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        Transforming clinical documents into digital formats
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        
                        NLG assisted creation of clinical documents like
                        Protocol, SAP, CSR, and Publications .
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        
                        An ontology driven knowledge graph database that gives a
                        360-degree view of the document
                      </p>
                    </div>
                  </div>
                  <button class="btn btn-submit py-2">know More</button>
                  <a href="">View Datasheet</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 p-0">
              <div className="product-images-box">
                <img className="w-full" src={productimage1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="cards-sevices mx-5 my-20">
          <div class="row  align-items-center">
            <div class="col-sm-6 p-0">
              <div className="product-images-box-1">
                <img className="w-full" src={productimage2} alt="" />
              </div>
            </div>
            <div class="col-sm-6 px-5">
              <div class="product-text px-lg-5">
                <h3>CSAT (Automation of clinical study build)</h3>
                <img class="box" src={butterfy} />

                <p>
                  An end-to-end platform that helps design and develop all the
                  components of a clinical study build process, while enhancing
                  the use of standard libraries with a review workflow mechanism
                  and library management.
                </p>
                <div className="product-list-points">
                  <div className="my-5">
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        NLP driven auto generation of eCRFs and edit checks.
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        
                        Automated test case generation and testing automation .
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        
                        Creating SDTM mapping, transformation & executable code.
                      </p>
                    </div>
                  </div>
                  <button class="btn btn-submit py-2">know More</button>
                  <a href="">View Datasheet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cards-sevices mx-5 my-20">
          <div class="row  align-items-center">
            <div class="col-sm-6 px-5">
              <div class="product-text px-lg-5">
                <h3>SDTM Mapping</h3>
                <img class="box" src={butterfy} />

                <p>
                  Lifio’s SDTM Mapping Tool is a cloud-based solution which
                  leverages the power of NPL and ML to automatically map source
                  (EDC, Lab, etc.) variables to the target SDTM standards using
                  the SDTM implementation guide.
                </p>
                <div className="product-list-points">
                  <div className="my-5">
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        Artificial intelligence (NLP/ML) based auto mapping of
                        raw EDC variable to SDTM variables
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        
                        Generates executable programs in SAS and R which reduces
                        the effort required in double programming
                      </p>
                    </div>
                  </div>
                  <button class="btn btn-submit py-2">know More</button>
                  <a href="">View Datasheet</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 p-0">
              <div className="product-images-box">
                <img className="w-full" src={productimage4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="cards-sevices mx-5 my-20">
          <div class="row  align-items-center">
            <div class="col-sm-6 p-0">
              <div className="product-images-box-1">
                <img className="w-full" src={productimage3} alt="" />
              </div>
            </div>
            <div class="col-sm-6 px-5">
              <div class="product-text px-lg-5">
                <h3>Data Capture Platform</h3>
                <img class="box" src={butterfy} />

                <p>
                  As a business that prioritizes its customers, Lifio is aware
                  of the need for an intuitive data collection tool in the
                  intricate setting of clinical trials. Lifio’s data capture
                  platform, which complies with 21CRF Part 11, is user-friendly,
                  simple to use, does not require code edit checks, and is
                  crammed with extraordinary features.
                </p>
                <div className="product-list-points">
                  <div className="my-5">
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        Transforming clinical documents into digital formats.
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        
                        NLG assisted creation of clinical documents like
                        Protocol, SAP, CSR, and Publications.
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={tick} alt="" />
                      <p>
                        
                        An ontology driven knowledge graph database that gives a
                        360-degree view of the document.
                      </p>
                    </div>
                  </div>
                  <button class="btn btn-submit py-2">know More</button>
                  <a href="">View Datasheet</a>
                </div>
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

export default Product;
