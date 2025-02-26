import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'

const ListEnquiry = () => {
  return (
    <>
      <CommonLayout>
        <h3>Manage Product Enquiry</h3>
        <hr />
        <table class="table table-striped mb-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">User Phone</th>
              <th scope="col">Details</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Galaxy F62</td>
              <td>John</td>
              <td>john@email.com</td>
              <td>9876543210</td>
              <td>What is the specification.</td>
              <td>2025-02-20</td>
              <td>
                <a href="" className='action-link'>Delete</a>
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

export default ListEnquiry
