import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

import DataService from '../service/DataService';

const Contactus = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    DataService.getFooter()
         .then((response) => {
          setData(response.data);
    });
  }, []);

  const [formdata, setFormData] = useState({
      id: Math.ceil(Math.random() * 100),
      user_name: '',
      user_email: '',
      user_subject: '',
      user_message: '',
      added_on: ''
  });

  const inputsHandler = (e) => {
    setFormData((inputField) => ({
        ...inputField,
        [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = () => {
      const {id, user_name, user_email, user_subject, user_message} = formdata;  
      let yourDate = new Date();
      const added_on = yourDate.toISOString().split('T')[0];

      if((user_name !== "") && (user_email !== "") && (user_subject !== "") && (user_message !== "")) {
        DataService.createContact({
            id, user_name, user_email, user_subject, user_message, added_on
        });
        setFormData({
          user_name: '',
          user_email: '',
          user_subject: '',
          user_message: ''
        });

        toast.success("Successfully added.");

      } else {
        toast.error("Please fill up all fields.");
      }

  };

  return (
    <>
    <main id="main">
    
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
          <li><NavLink to="/"> Home </NavLink></li>
          <li>Contact</li>
        </ol>
      </div>
    </section>
   
    <section id="contact" className="contact">
      <div className="container">

        <div>
          <iframe style={{"border":"0", "width": "100%", "height": "270px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" title="google map" frameborder="0" allowfullscreen></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p dangerouslySetInnerHTML={{  __html: data.address  }}></p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{data.email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{data.phone}</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

            <form  className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="user_name" id="user_name" onChange={inputsHandler} value={formdata.user_name} required className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="user_email" id="user_email" onChange={inputsHandler} value={formdata.user_email} placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="user_subject" id="user_subject" onChange={inputsHandler} value={formdata.user_subject} placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" rows="5" name="user_message" id="user_message" onChange={inputsHandler} value={formdata.user_message} placeholder="Your Message" required></textarea>
              </div>
              <div className="text-center"><button type="button" onClick={() => handleSubmit()} className="btn btn-success">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    </main>
    <ToastContainer />
    </>
  )
}

export default Contactus;