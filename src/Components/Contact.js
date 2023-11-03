import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import contactimage1 from "../Images/png/Icons System_Clinical Protocol Digitization.png";
import contactimage2 from "../Images/png/Icons System_Drug to market faster.png";
import contactimage3 from "../Images/png/Icons System_male.png";
import axios from "axios";

function Contact() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("mobile", mobile);
    data.append("email", email);
    data.append("query", query);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://54.185.55.214:8000/api/add_contactus/",
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
        toast.error("falied" + error.message);
      });
  };
  return (
    <div>
      <section class="banner-contact">
        <div>
          <div class="row ">
            <div class="col-sm-6">
              <div class="product-text px-lg-5">
                <h3>Get in Touch</h3>
                <p>
                  If you’re in the race to get lifesaving drugs to market
                  faster, consider us as the wings beneath your feet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class=" mx-lg-5 my-20 m-3">
          <div className="contanct-form">
            <div className="row mx-0">
              <div className="col-sm-4 border-right-primary pe-lg-5">
                <h5 class="mb-5"> Reach us</h5>
                <div className="contact-first-section">
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <img src={contactimage1} alt="" />
                    </div>
                    <div>
                      <p className="mb-0">Email :</p>
                      <h6>info@liﬁo.ai</h6>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <img src={contactimage3} alt="" />
                    </div>
                    <div>
                      <p className="mb-0">Phone :</p>
                      <h6>+1 408 398 9343</h6>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <img src={contactimage2} alt="" />
                    </div>
                    <div>
                      <p className="mb-0">Address :</p>
                      <h6>
                        5201 Great America Parkway Suite 320, Santa Clara
                        California 95054
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 ps-lg-5 pt-5 p-0">
                <h5 class="mb-5"> Leave a Message</h5>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        value={first_name}
                        placeholder="First Name"
                        onChange={(e) => setFirst_name(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        value={last_name}
                        placeholder="Last Name"
                        onChange={(e) => setLast_name(e.target.value)}
                        required

                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required

                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        value={mobile}
                        placeholder="Mobile Number"
                        onChange={(e) => setMobile(e.target.value)}
                        required

                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        value={query}
                        placeholder="Your message"
                        onChange={(e) => setQuery(e.target.value)}
                        require
                      />
                    </div>

                    <div class="text-end">
                      <button class="btn btn-submit px-5">Submit</button>
                    </div>
                  </div>
                </form>
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

export default Contact;
