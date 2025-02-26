import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import DataService from '../service/DataService';

const Home = () => {

  const [servdata, setServdata] = useState([]);
  const [secdata, setSecdata] = useState([]);

  useEffect(() => {
    DataService.getHome()
         .then((response) => {
            setServdata(response.data[0].services);
            setSecdata(response.data[0].aboutus);
         });
  }, []);

  return (
    <>      
    <section id="hero">
      <div className="hero-container" data-aos="fade-up">
        <h1>Welcome to Serenity</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <a href="/" className="btn-get-started scrollto">Get Started</a>
      </div>
    </section>
    
    <main id="main">    
    <section id="about" className="about">
      <div className="container">

        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="row justify-content-end">

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-emoji-smile"></i>
                  <CountUp delay={0} end={65} />
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-journal-richtext"></i>
                  <CountUp delay={0} end={85} />
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-clock"></i>
                  <CountUp delay={0} end={27} />
                  <p>Years of experience</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-award"></i>
                  <CountUp delay={0} end={22} />
                  <p>Awards</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">

        {
            secdata.map((section1) => (        
              ( section1.id === 1 &&      
              <>
              <div className="col-lg-6 video-box align-self-baseline position-relative">
            <img src={section1.image_src} className="img-fluid" alt="" />            
          </div>

          <div className="col-lg-6 pt-3 pt-lg-0 content">
            <h3>{section1.heading}</h3>
            <div dangerouslySetInnerHTML={{  __html: section1.content  }}></div>
          </div>
              </>
              )
            ))
          }

        </div>

      </div>
    </section>

    
    <section id="cta" className="cta">
      <div className="container" data-aos="fade-in">

            {
            secdata.map((section2) => (        
              ( section2.id === 2 &&      
              <>
                <div className="text-center">
                  <h3>{section2.heading}</h3>
                  <p> {section2.content}</p>
                  <NavLink className="cta-btn" to={section2.button_url}>{section2.button_label}</NavLink>
                </div>
              </>
              )
            ))}

      </div>
    </section>

    
    <section id="services" className="services ">
      <div className="container">

        <div className="section-title pt-5" data-aos="fade-up">
        {
            secdata.map((section3) => (        
              ( section3.id === 3 &&      
              <>
              <h2>{section3.heading}</h2>
              </>
              )))
        }
        </div>

        <div className="row">
        {
            servdata.map((service) => 
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up">
                <div className="icon"><i className={service.icon} style={{'color': `${service.color}` }}></i></div>
                <h4 className="title">{service.name}</h4>
                <p className="description">{service.content}</p>
              </div>
            </div>
            )
          }
        </div>

      </div>
    </section>

  </main>
    </>
  )
}

export default Home;