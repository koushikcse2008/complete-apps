import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const ListPortfolio = () => {
  return (
    <>
    <CommonLayout>
    <h3>Manage Portfolio</h3>
    <NavLink to='/portfolio/add' className='add-data'>Create Portfolio</NavLink>
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
            <a href="/portfolio/edit/1" className='action-link'>Edit</a> | <a href="" className='action-link'>Delete</a>
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

export default ListPortfolio
