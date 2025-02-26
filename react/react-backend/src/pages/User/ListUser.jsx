import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const ListUser = () => {
  return (
    <>
      <CommonLayout>
        <h3>Manage User</h3>
        <NavLink to='/user/add' className='add-data'>Create User</NavLink>
        <hr />
        <table class="table table-striped mb-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Country</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>John</td>
              <td>john@email.com</td>
              <td>9876543210</td>
              <td>Kolkata</td>
              <td>India</td>
              <td>West Bengal</td>
              <td>Kolkata</td>
              <td>2025-02-20</td>
              <td>
                <a href="/user/edit/1" className='action-link'>Edit</a> | <a href="" className='action-link'>Delete</a>
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

export default ListUser
