import CommonLayout from '@/layouts/commonlayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Faq = () => {
  return (
    <>
    <Head>
        <title>Manage FAQ</title>
    </Head>
      <CommonLayout>
      <h3>Manage Faq</h3>
        <Link href='' class='add-data'>Create Faq</Link>
        <hr />
        <table class="table table-striped mb-4">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Faq Title</th>
            <th scope="col">Faq Content</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Question here</td>
            <td>Answer here</td>
            <td>2025-02-20</td>
            <td>
            <a href="" class='action-link'>Edit</a> | <a href="" class='action-link'>Delete</a>
            </td>
        </tr>
        </tbody>
    </table>

    <hr class='mt-2' />

    <div class='mt-4'>
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

export default Faq
