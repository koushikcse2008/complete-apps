import React from 'react'
import CommonLayout from '../../layouts/CommonLayout'
import { NavLink } from 'react-router-dom'

const AddFaq = () => {
  return (
    <>
    <CommonLayout>
      <h3>Add Faq</h3>
      <NavLink to='/faq/list'>Back to Faq</NavLink>
      <hr />
      <div className='row'>
        <div className="mb-3 col-lg-12">
            <label for="formBrand" className="form-label">Question:</label>
            <input type="text" className="form-control input-sm mb-3" id="formBrand" />

            <label for="formBrand" className="form-label">Answer:</label>
            <textarea className="form-control input-sm mb-3" id="formBrand" rows={6} style={{'resize': 'none'}}></textarea>

            <button name='btnAdd' id='btnAdd' className='btn btn-primary'>Add Faq</button>
        </div>
        </div>
    </CommonLayout>
    </>
  )
}

export default AddFaq
