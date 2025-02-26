import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/* redux data */
import { useDispatch, useSelector } from "react-redux";
import { FetchService, FetchFeature } from "../redux/slice/ServicesSlice";

const Services = () => {

  const dispatch = useDispatch();
  const { service_data } = useSelector(state => state?.servicesSlice);
  const { feature_data } = useSelector(state => state?.servicesSlice);
  useEffect(()=> {
    dispatch(FetchService());
    dispatch(FetchFeature());
  }, []);


  return (
    <>
    <main id="main">
    
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>Services</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
          <li><NavLink to="/"> Home </NavLink></li>
          <li>Services</li>
        </ol>
      </div>
    </section>

    
    <section id="services" className="services ">
      <div className="container">

        <div className="row">

          {
            service_data.map((service) => 
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

    <section id="features" className="features">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          {
            feature_data.map((feature) => 
                <div className="col-md-6 d-flex align-items-stretch mb-4 mt-md-0">
                    <div className="card" style={{"backgroundImage": `${feature.image_src}` }}>
                      <div className="card-body">
                        <h5 className="card-title">{feature.name}</h5>
                        <p className="card-text">{feature.content}</p>
                      </div>
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

export default Services;