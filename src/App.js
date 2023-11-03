import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Product from "./Components/Product";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CDD from "./Components/CDD";
import DCP from "./Components/DCP";
import SDTM from "./Components/SDTM";
import CSAT from "./Components/CSAT";
import { ToastContainer } from "react-toastify";
// import Get from "./Components/Get";


function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cdd" element={<CDD />} />
          <Route path="/dcp" element={<DCP />} />
          <Route path="/sdtm" element={<SDTM />} />
          <Route path="/csat" element={<CSAT />} />
          {/* <Route path="/get" element={<Get />} /> */}


        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
