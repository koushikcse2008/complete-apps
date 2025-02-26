import CommonLayout from '@/layouts/commonlayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Head>
        <title>Manage Contact</title>
    </Head>
      <CommonLayout>
      <h3>Manage Contact</h3>
        <hr />
        <table class="table table-striped mb-4">
        <thead>
        <tr>
            <th scope="col">!#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>John</td>
            <td>Doe</td>
            <td>john@email.com</td>
            <td>9876543210</td>
            <td>Test Contact</td>
            <td>Test Message</td>
            <td>2025-02-20</td>
            <td>
            <Link href="" class='action-link'>Delete</Link>
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

export default Contact
