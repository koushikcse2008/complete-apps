import React, { useState, useEffect } from 'react';
// import DataService from '../../service/DataService';
import { NavLink } from 'react-router-dom';

/* redux data */
import { useDispatch, useSelector } from "react-redux";
import { FetchCategory } from "../../redux/slice/CategorySlice";

const BlogSidebar = () => {

    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     DataService.getBlog()
    //             .then((response) => {
    //                 setItems(response.data);
    //                 //setSpinner(false);
    //                 console.log(response.data);
    //             });
    // }, []);

    const dispatch = useDispatch();
    const { category_data } = useSelector(state => state?.categorySlice);
    
    useEffect(()=> {
        dispatch(FetchCategory());
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
            {
                category_data.map((data) => (
                <li><NavLink to={`/blog?category=${data.category}`}>{data.category} <span>({data.posts})</span></NavLink></li>
                ))
            }
            </ul>
            </div>

            <h3 className="sidebar-title">Recent Posts</h3>
            <div className="sidebar-item recent-posts">
            {
                category_data.map((data) => (
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