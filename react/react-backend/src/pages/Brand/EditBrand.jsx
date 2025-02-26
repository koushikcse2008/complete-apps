import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const EditBrand = () => {
  return (
    <>
    <CommonLayout>
      <h3>Edit Brand</h3>
      <NavLink to='/brand/list'>Back to Brand</NavLink>
      <hr />
      <div className='row'>
        <div className="mb-3 col-md-3">
          <label for="formBrand" className="form-label">Name:</label>
          <input type="text" className="form-control input-sm mb-3" id="formBrand" />
        <button name='btnAdd' id='btnAdd' className='btn btn-primary'>Update Brand</button>
        </div>
        </div>
    </CommonLayout>
    </>
  )
}

export default EditBrand
