import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'

const ListOrder = () => {
  return (
    <>
      <CommonLayout>
        <h3>Manage Order</h3>
        <hr />
        <table class="table table-striped mb-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order No</th>
              <th scope="col">Total Price</th>
              <th scope="col">Billing Address</th>
              <th scope="col">Shipping Address</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>65478525</td>
              <td>$500</td>
              <td>Salt Lake, Kolkata</td>
              <td>Salt Lake, Kolkata</td>
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

export default ListOrder
