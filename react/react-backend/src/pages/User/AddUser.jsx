import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const AddUser = () => {
  return (
    <>
    <CommonLayout>
      <h3>Add User</h3>
      <NavLink to='/user/list'>Back to User</NavLink>
      <hr />
      <div className='row'>
        <div className="mb-3 col-lg-6">
            <label for="formBrand" className="form-label">Name:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">Phone:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">Country:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">City:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />
            
            
        </div>
        <div className="mb-3 col-lg-6">

            <label for="formBrand" className="form-label">Email:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">Address:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">State:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />
        </div>
      </div>

      <div className='row'>
        <div className="mb-3 col-lg-12 text-center">
          <hr />
          <button name='btnAdd' id='btnAdd' className='btn btn-primary'>Add User</button>
        </div>
      </div>
    </CommonLayout>
    </>
  )
}

export default AddUser
