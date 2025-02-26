import React, { useState, useEffect } from 'react';
import DataService from '../../service/DataService';
import { NavLink } from 'react-router-dom';


const BlogSidebar = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        DataService.getBlog()
                .then((response) => {
                    setItems(response.data);
                    //setSpinner(false);
                    console.log(response.data);
                });

    }, []);

  return (
    <>
        <div className="sidebar">

            <h3 className="sidebar-title">Search</h3>
            <div className="sidebar-item search-form">
            <form action="">
                <input type="text" />
                <button type="submit"><i className="bi bi-search"></i></button>
            </form>
            </div>

            <h3 className="sidebar-title">Categories</h3>
            <div className="sidebar-item categories">
            <ul>
                <li><a href="!#">General <span>(25)</span></a></li>
                <li><a href="!#">Lifestyle <span>(12)</span></a></li>
                <li><a href="!#">Travel <span>(5)</span></a></li>
                <li><a href="!#">Design <span>(22)</span></a></li>
                <li><a href="!#">Creative <span>(8)</span></a></li>
                <li><a href="!#">Educaion <span>(14)</span></a></li>
            </ul>
            </div>

            <h3 className="sidebar-title">Recent Posts</h3>
            <div className="sidebar-item recent-posts">
            {
                items.map((data) => (
                    <div className="post-item clearfix">
                        <img src={data.image_src} alt="" />
                        <h4><NavLink to={`/blog-details/${data.id}`}>{data.name}</NavLink></h4>
                        {/* <time datetime="2020-01-01">Jan 1, 2020</time> */}
                    </div>
                ))
            }            

            </div>

            <h3 className="sidebar-title">Tags</h3>
            <div className="sidebar-item tags">
            <ul>
                <li><a href="!#">App</a></li>
                <li><a href="!#">IT</a></li>
                <li><a href="!#">Business</a></li>
                <li><a href="!#">Mac</a></li>
                <li><a href="!#">Design</a></li>
                <li><a href="!#">Office</a></li>
                <li><a href="!#">Creative</a></li>
                <li><a href="!#">Studio</a></li>
                <li><a href="!#">Smart</a></li>
                <li><a href="!#">Tips</a></li>
                <li><a href="!#">Marketing</a></li>
            </ul>
            </div>

            </div>
    </>
  )
}

export default BlogSidebar;