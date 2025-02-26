import CommonLayout from '@/layouts/commonlayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <Head>
    <title>Manage About</title>
    </Head>
      <CommonLayout>
      <h3>Manage About Us</h3>
        <Link href='' class='add-data'>Create About Us</Link>
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
                <Link href="" class='action-link'>Edit</Link> | <Link href="!#" class='action-link'>Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <hr class='mt-2' />

        <div class='mt-4'>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="!#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="!#">1</a></li>
              <li class="page-item"><a class="page-link" href="!#">2</a></li>
              <li class="page-item"><a class="page-link" href="!#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="!#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </CommonLayout>
    </>
  )
}

export default About
