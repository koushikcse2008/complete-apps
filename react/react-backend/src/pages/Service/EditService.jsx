import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const EditService = () => {
  return (
    <>
    <CommonLayout>
      <h3>Update Service</h3>
      <NavLink to='/service/list'>Back to Service</NavLink>
      <hr />
      <div className='row'>
        <div className="mb-3 col-lg-6">
            <label for="formBrand" className="form-label">Title:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">Content:</label>
            <textarea className="form-control input-sm mb-3" id="formBrand" rows={6} style={{'resize': 'none'}}></textarea>

            <label for="formBrand" className="form-label">Image:</label>
            <input type='file' className='form-control mb-4' />

            <button name='btnAdd' id='btnAdd' className='btn btn-primary'>Update Service</button>
        </div>
        </div>
    </CommonLayout>
    </>
  )
}

export default EditService
