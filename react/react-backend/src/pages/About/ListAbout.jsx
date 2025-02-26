import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const ListAbout = () => {
  return (
    <>
      <CommonLayout>
        <h3>Manage About Us</h3>
        <NavLink to='/about/add' className='add-data'>Create About Us</NavLink>
        <hr />
        <table className="table table-striped mb-4">
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
                <NavLink to="/about/edit/1" className='action-link'>Edit</NavLink> | <NavLink to="!#" className='action-link'>Delete</NavLink>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className='mt-2' />

        <div className='mt-4'>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="!#">Previous</a>
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

export default ListAbout
