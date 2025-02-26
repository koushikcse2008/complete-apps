import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
        <ul className="list-group mt-3 custom-sidebar">
          <li className="list-group-item" aria-current="true">
            <NavLink to="/dashboard" activeClassName='active'>Dashboard</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/about/list" activeClassName='active'>Manage About</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/contact/list" activeClassName='active'>Manage Contact</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/faq/list" activeClassName='active'>Manage FAQ</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/portfolio/list" activeClassName='active'>Manage Portfolio</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/service/list" activeClassName='active'>Manage Service</NavLink>
          </li>          
          <li className="list-group-item" aria-current="true">
            <NavLink to="/brand/list" activeClassName='active'>Manage Brand</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/category/list" activeClassName='active'>Manage Category</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/product/list" activeClassName='active'>Manage Product</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/order/list" activeClassName='active'>Manage Order</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/product-enquiry/list" activeClassName='active'>Manage Product Enquiry</NavLink>
          </li>
          <li className="list-group-item" aria-current="true">
            <NavLink to="/user/list" activeClassName='active'>Manage User</NavLink>
          </li>
        </ul>
    </>
  )
}

export default Sidebar
