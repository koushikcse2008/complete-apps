import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const EditProduct = () => {
  return (
    <>
    <CommonLayout>
      <h3>Update Product</h3>
      <NavLink to='/product/list'>Back to Product</NavLink>
      <hr />
      <div className='row'>
        <div className="mb-3 col-lg-6">
            <label for="formBrand" className="form-label">Category:</label>
            <select className='form-select'>
                <option value=''>Select</option>
            </select>

            <label for="formBrand" className="form-label mt-3">Brand:</label>
            <select className='form-select'>
                <option value=''>Select</option>
            </select>

            <label for="formBrand" className="form-label mt-3">Product Name:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">Inventory:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">Price:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />            
            
        </div>
        <div className="mb-3 col-lg-6">           

            <label for="formBrand" className="form-label">Short Desc:</label>
            <textarea className="form-control input-sm mb-3" id="formBrand" rows={6} style={{'resize': 'none'}}></textarea>

            <label for="formBrand" className="form-label">Description:</label>
            <textarea className="form-control input-sm mb-3" id="formBrand" rows={6} style={{'resize': 'none'}}></textarea>
        </div>
      </div>

      <div className='row'>
        <div className="mb-3 col-lg-12 text-center">
          <hr />
          <button name='btnAdd' id='btnAdd' className='btn btn-primary'>Update Product</button>
        </div>
      </div>
    </CommonLayout>
    </>
  )
}

export default EditProduct
