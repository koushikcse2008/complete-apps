import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

const Pricing = () => {

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/pricing")
         .then((response) => {
            setFaq(response.data[0].faq);
         });
  }, []);

  return (
    <>
    <main id="main">
    
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>Pricing</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
          <li><NavLink to="/"> Home </NavLink></li>
          <li>Pricing</li>
        </ol>
      </div>
    </section>

    
    <section id="pricing" className="pricing">
      <div className="container">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="box" data-aos="fade-up">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="!#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="box featured" data-aos="fade-up" data-aos-delay="100">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="!#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="200">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="!#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <span className="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="!#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    
    <section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        {
          faq.map((data) => 
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up">
            <div className="col-lg-5">
              <i className="bx bx-help-circle"></i>
              <h4>{data.name}</h4>
            </div>
            <div className="col-lg-7">
              <p>
              {data.content}
              </p>
            </div>
          </div>
          )
        }
        
      </div>
    </section>

    </main>
    </>
  )
}

export default Pricing;