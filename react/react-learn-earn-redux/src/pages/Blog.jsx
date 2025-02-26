import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import BlogSidebar from '../components/common/BlogSidebar';

import { useParams, useSearchParams } from 'react-router-dom';

/* redux data */
import { useDispatch, useSelector } from "react-redux";
import { FetchBlog } from "../redux/slice/BlogSlice";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <>
            <article className="entry">
              <div className="entry-img">
                <img src={item.image_src} alt="" className="img-fluid" />
              </div>
              <h2 className="entry-title">
                <NavLink to={`/blog-details/${item.id}`}>{item.name}</NavLink>
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
                <div className="read-more">
                <NavLink to={`/blog-details/${item.id}`}>Read More</NavLink>
                </div>
              </div>
            </article>
            </>
        ))}
    </>
  );
}

const Blog = ({ itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);

  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const dispatch = useDispatch();
  const { blogs_data } = useSelector(state => state?.blogSlice);
  
  useEffect(()=> {
    const category = searchParams.get("category") || '';
    // const category = params.category;
    // console.log(category);
    dispatch(FetchBlog(category));
  }, []);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = blogs_data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs_data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs_data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
          <li><NavLink to="/"> Home </NavLink></li>
          <li>Blog</li>
        </ol>
      </div>
    </section>

    
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-8 entries">

          <Items currentItems={currentItems} /> 

          <div className="blog-pagination">
            <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            pageClassName=""
            pageLinkClassName=""
            previousClassName=""
            previousLinkClassName=""
            nextClassName=""
            nextLinkClassName=""
            breakLabel="..."
            breakClassName=""
            breakLinkClassName=""
            containerClassName="justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />              
            </div>

          </div>

          <div className="col-lg-4">

            <BlogSidebar />

          </div>

        </div>

      </div>
    </section>

    </main>
    <ToastContainer />
    </>
  )
}

export default Blog;