import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const ListProduct = () => {
  return (
    <>
      <CommonLayout>
        <h3>Manage Product</h3>
        <NavLink to='/product/add' className='add-data'>Create Product</NavLink>
        <hr />
        <table className="table table-striped mb-4">
          <thead>
            <tr>
              <th scope="col">!#</th>
              <th scope="col">Category</th>
              <th scope="col">Brand</th>
              <th scope="col">Product Name</th>
              <th scope="col">Inventory</th>
              <th scope="col">Price</th>
              <th scope="col">Short Desc</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mobile</td>
              <td>Samsung</td>
              <td>Galaxy F62</td>
              <td>10</td>
              <td>$30</td>
              <td>Here it is details</td>
              <td>Active</td>
              <td>2025-02-20</td>
              <td>
                <NavLink to="/product/edit/1" className='action-link'>Edit</NavLink> | <NavLink to="" className='action-link'>Delete</NavLink>
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
              <li claclassNamess="page-item">
                <a className="page-link" href="!#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </CommonLayout>
    </>
  )
}

export default ListProduct
