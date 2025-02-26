import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const Sidebar = () => {

  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path ? 'active' : '';
  };

  return (
    <>
        <ul class="list-group mt-3 custom-sidebar">
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/dashboard" class={isActive('/admin/dashboard')}>Dashboard</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/about" class={isActive('/admin/about')}>Manage About</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/contact" class={isActive('/admin/contact')}>Manage Contact</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/faq" class={isActive('/admin/faq')}>Manage FAQ</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/portfolio" class={isActive('/admin/portfolio')}>Manage Portfolio</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/service" class={isActive('/admin/service')}>Manage Service</Link>
          </li>          
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/brand" class={isActive('/admin/brand')}>Manage Brand</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/category" class={isActive('/admin/category')}>Manage Category</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/product" class={isActive('/admin/product')}>Manage Product</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/order" class={isActive('/admin/order')}>Manage Order</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/enquiry" class={isActive('/admin/enquiry')}>Manage Product Enquiry</Link>
          </li>
          <li class="list-group-item" aria-current="true">
            <Link href="/admin/user" class={isActive('/admin/user')}>Manage User</Link>
          </li>
        </ul>
    </>
  )
}

export default Sidebar