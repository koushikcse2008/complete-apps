import CommonLayout from '@/layouts/commonlayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Service = () => {
  return (
    <>
      <Head>
        <title>Manage Service</title>
      </Head>
      <CommonLayout>
      <h3>Manage Service</h3>
        <Link href='' className='add-data'>Create Service</Link>
        <hr />
        <table class="table table-striped mb-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Image</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>React app</td>
              <td>React works done here.</td>
              <td>N/A</td>
              <td>2025-02-20</td>
              <td>
                <a href="" className='action-link'>Edit</a> | <a href="" className='action-link'>Delete</a>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className='mt-2' />

        <div className='mt-4'>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </CommonLayout>
    </>
  )
}

export default Service
