import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const ListContact = () => {
  return (
    <>
    <CommonLayout>
    <h3>Manage Contact</h3>
    <hr />
    <table className="table table-striped mb-4">
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
          <NavLink href="" className='action-link'>Delete</NavLink>
        </td>
      </tr>
    </tbody>
  </table>

  <hr className='mt-2' />

  <div className='mt-4'>
      <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
              <li className="page-item disabled">
              <a href="!#" className="page-link">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="!#">1</a></li>
              <li className="page-item"><a className="page-link" href="!#">2</a></li>
              <li className="page-item"><a className="page-link" href="!#">3</a></li>
              <li className="page-item">
              <a className="page-link" href="!#">Next</a>
              </li>
          </ul>
      </nav>
  </div>
    </CommonLayout>  
    </>
  )
}

export default ListContact
