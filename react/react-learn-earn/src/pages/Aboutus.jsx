import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import DataService from '../service/DataService';


const Aboutus = () => {

  const [secdata, setSecdata] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [clients, setClients] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    DataService.getAboutUs()
         .then((response) => {
          setSecdata(response.data[0].sections);
          setTestimonials(response.data[1].testimonials);
          setClients(response.data[2].clients);
          setWorks(response.data[3].works);
         });        

         
  }, []);

  const testimonialList = testimonials.map((testimonial) => 
      <>
        <SwiperSlide>
          <div className="testimonial-item">
                <img src={testimonial.image_src} className="testimonial-img" alt="" />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.designation}</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {testimonial.content}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
          </SwiperSlide>
      </>
  );

  const clientList = clients.map((client) => 
    <>
    <SwiperSlide><img src={client.image_src} className="img-fluid" alt="" /></SwiperSlide>
    </>
  );


  return (
    <>
    <main id="main">
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>About Us</h2> 
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
          <li><NavLink to="/">Home</NavLink></li>
          <li>About</li>
        </ol>
      </div>
    </section>

    
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

    
    <section id="work-process" className="work-process">
      <div className="container">

          {
            secdata.map((section2) => (        
              ( section2.id === 2 &&      
              <>
                <div className="section-title" data-aos="fade-up">
                  <h2>{section2.heading}</h2>
                  <p>{section2.content}</p>
                </div>   

              </>
              )
            ))
          } 
        
        {
          works.map((work, index) =>   
          <>
              <div className="row content">
              { (index % 2 === 0) &&
              <>
              <div class="col-md-5" data-aos="fade-right">
                <img src={work.image_src} class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 pt-4" data-aos="fade-left">
                <h3>{work.heading}</h3>
                <div dangerouslySetInnerHTML={{ __html: work.content }}></div>
              </div>
              </>  
              }          
                  
                { index % 2 === 1 &&
                <>
               <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
                  <img src={work.image_src} class="img-fluid" alt="" />
                </div>
                <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                  <h3>{work.heading}</h3>
                  <div dangerouslySetInnerHTML={{ __html: work.content }}></div>
                </div> 
                </>
                }            
              </div>
          </>
        )
        }  

      </div>
    </section>

    
    <section id="skills" className="skills section-bg">
      <div className="container">

        
        {
            secdata.map((section3) => (        
              ( section3.id === 3 &&      
              <>
                <div className="section-title" data-aos="fade-up">
                  <h2>{section3.heading}</h2>
                  <p>{section3.content}</p>
                </div>   

              </>
              )
            ))
          }           

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="assets/img/skills-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>

            <div className="skills-content">

              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>

                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

              </div>

              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">JavaScript <i className="val">75%</i></span>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Photoshop <i className="val">55%</i></span>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>

    <section id="testimonials" className="testimonials">
      <div className="container">

          {
            secdata.map((section4) => (        
              ( section4.id === 4 &&      
              <>
                <div className="section-title" data-aos="fade-up">
                  <h2>{section4.heading}</h2>
                  <p>{section4.content}</p>
                </div>   

              </>
              )
            ))
          }         

        <Swiper
          cssMode={true}
          navigation={false}
          // pagination={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper slides-1"
        >
          { testimonialList }
        </Swiper>

      </div>
    </section>



    
     <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">

        {
            secdata.map((section5) => (        
              ( section5.id === 5 &&      
              <>
                <div className="section-title" data-aos="fade-up">
                  <h2>{section5.heading}</h2>
                  <p>{section5.content}</p>
                </div>   

              </>
              )
            ))
          }

        <Swiper
        slidesPerView={6}
        spaceBetween={100}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper clients-slider"
        >
          {clientList}
        </Swiper>        

      </div>
    </section> 

    </main>
    </>
  )
}

export default Aboutus;