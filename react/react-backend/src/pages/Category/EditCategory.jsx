import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const EditCategory = () => {
  return (
    <>
    <CommonLayout>
      <h3>Edit Category</h3>
      <NavLink to='/category/list'>Back to Category</NavLink>
      <hr />
      <div className='row'>
        <div className="mb-3 col-md-3">
          <label for="formBrand" className="form-label">Name:</label>
          <input type="text" className="form-control input-sm mb-3" id="formBrand" />
          <button name='btnAdd' id='btnAdd' className='btn btn-primary'>Update Category</button>
        </div>
        </div>
    </CommonLayout>
    </>
  )
}

export default EditCategory
