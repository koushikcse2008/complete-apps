import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import BlogSidebar from '../components/common/BlogSidebar';

import DataService from '../service/DataService';

const BlogDetails = () => {

  const [item, setItem] = useState([]);
  const params = useParams();
  useEffect(() => {
    DataService.getBlogById(params.id)
         .then((response) => {
            setItem(response.data);
         })
  }, [item]);

  return (
    <>
    <main id="main">

    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>Blog</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li>{item.name}</li>
        </ol>
      </div>
    </section>
    
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-8 entries">
            <article className="entry entry-single">
              <div className="entry-img">
                <img src={item.image_src} alt="" className="img-fluid" />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">{item.name}</a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> {item.author}</li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <time datetime="2020-01-01">{item.publish_date}</time></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> {item.comment} Comments</li>
                </ul>
              </div>
              <div className="entry-content">
                <p dangerouslySetInnerHTML={{  __html: item.content  }}></p>               
              </div>

              <NavLink to="/blog" className="btn btn-danger">Back</NavLink>

            </article>
            

          </div>

          <div className="col-lg-4">

          <BlogSidebar />

          </div>

        </div>

      </div>
    </section>

    </main>
    </>
  )
}

export default BlogDetails;