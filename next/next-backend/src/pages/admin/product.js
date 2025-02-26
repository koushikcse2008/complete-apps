import CommonLayout from '@/layouts/commonlayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <>
      <Head>
        <title>Manage Product</title>
      </Head>
      <CommonLayout>
      <h3>Manage Product</h3>
        <Link href="" class='add-data'>Create Product</Link>
        <hr />
        <table class="table table-striped mb-4">
            <thead>
            <tr>
                <th scope="col">!#</th>
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
                <th scope="col">Product Name</th>
                <th scope="col">Inventory</th>
                <th scope="col">Price</th>
                <th scope="col">Short Desc</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mobile</td>
                <td>Samsung</td>
                <td>Galaxy F62</td>
                <td>10</td>
                <td>$30</td>
                <td>Here it is details</td>
                <td>Active</td>
                <td>2025-02-20</td>
                <td>
                <Link href="" class='action-link'>Edit</Link> | <Link href="" class='action-link'>Delete</Link>
                </td>
            </tr>
            </tbody>
        </table>

        <hr class='mt-2' />

        <div class='mt-4'>
            <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a href="!#" class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="!#">1</a></li>
                <li class="page-item"><a class="page-link" href="!#">2</a></li>
                <li class="page-item"><a class="page-link" href="!#">3</a></li>
                <li claclassss="page-item">
                <a class="page-link" href="!#">Next</a>
                </li>
            </ul>
            </nav>
        </div>
      </CommonLayout>
    </>
  )
}

export default Product
