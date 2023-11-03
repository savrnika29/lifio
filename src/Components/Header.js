import React from "react";
import logo from "../Images/Banner/logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import system_CSAT1 from "../Images/png/Icons System_CSAT.png";
import System_digital_data from "../Images/png/Icons System_digital data.png";
import system_CSAT from "../Images/png/Icons System_automation.png";
import system_CSAT2 from "../Images/Other UI Assets/0V9ciy5g 1.png";

const Header = () => {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [product, setProduct] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("full_name", full_name);
    data.append("mobile", mobile);
    data.append("email", email);
    data.append("product", product);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://54.185.55.214:8000/api/add_request_demo/",
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

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 container">
        <a class="navbar-brand" href="/">
          <img src={logo} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mx-auto">
            <div id="link-1" class="nav-item dropdown-hover mx-2">
              <a class="nav-link dropdown-hover-button" href="#">
                Products
              </a>

              <div class="dropdown-hover-content">
                <div class="row justify-content-between">
                  <div class="col-auto">
                    <div class="mb-3">
                      <a class="dropdown-item p-0" href="/cdd">
                        <img src={system_CSAT1} alt="" /> Clinical Digital
                        Document (CDD)
                      </a>
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="mb-3">
                      <a class="dropdown-item p-0" href="/csat">
                        <img src={System_digital_data} alt="" />
                        Clinical Study Automation Tool (CSAT)
                      </a>
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="mb-3">
                      <a class="dropdown-item p-0" href="/sdtm">
                        <img src={system_CSAT} alt="" />
                        SDTM Mapping
                      </a>
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="mb-3">
                      <a class="dropdown-item p-0" href="/dcp">
                        <img src={system_CSAT2} alt="" />
                        Data Capture Platform
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-item mx-2 active">
              <a class="nav-link" href="/services">
                Services
              </a>
            </div>
            <div class="nav-item mx-2">
              <a class="nav-link" href="/about">
                About Us
              </a>
            </div>
            <div class="nav-item mx-2">
              <a class="nav-link" href="/contact">
                Contact Us
              </a>
            </div>
            <div class="nav-item mx-2">
              <a class="nav-link" href="/blogs">
                Blogs
              </a>
            </div>
          </div>
          <div>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-outline-primary px-4"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </nav>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-0">
              {" "}
              <div className="contanct-form shadow-none p-5">
                <h5 class="mb-5">
                  {" "}
                  Please provide the following information & we will reach out
                  to you.
                </h5>
                <div>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={full_name}
                      placeholder="Name"
                      onChange={(e) => setFull_name(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={mobile}
                      placeholder="Mobile Number"
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />

                    <input
                      type="text"
                      value={product}
                      placeholder="message"
                      onChange={(e) => setProduct(e.target.value)}
                      required
                    />

                    <div className="text-end">
                      <button class="btn btn-submit px-5" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
