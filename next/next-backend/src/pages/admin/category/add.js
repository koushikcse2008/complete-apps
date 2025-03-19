// pages/admin/categories/add.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import CommonLayout from '@/layouts/commonlayout';
import Link from 'next/link';
import { toast } from 'react-toastify';

const AddCategory = () => {
  const [cat_name, setName] = useState('');
  const [cat_desc, setDesc] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_URI;

    const res = await fetch(`${apiUrl}/category/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cat_name, cat_desc }),
    });

    if (res.ok) {
      setName(''); setDesc('');
      toast.success('Successfully added!');
      //router.push('/admin/category');
    } else {
      toast.error('Error adding category!');
    }
  };

  return (
    <>
    <CommonLayout>
    <h3>Add Category</h3>
      <Link href='/admin/category'>Back to Category</Link>
      <hr />
      <div className='row'>
        <div className="mb-3 col-md-3">
            <form onSubmit={handleSubmit}>
                <label for="formBrand" className="form-label">Name:</label>
                <input type="text" className="form-control input-sm mb-3" value={cat_name} onChange={(e) => setName(e.target.value)} required />
                <label for="formBrand" className="form-label">Description:</label>
                <textarea className="form-control input-sm mb-3" value={cat_desc} onChange={(e) => setDesc(e.target.value)} rows={6} required></textarea>
                <button type="submit" name='btnAdd' id='btnAdd' className='btn btn-primary'>Add Category</button>
            </form>
        </div>
        </div>
      </CommonLayout>
    </>
  );
};

export default AddCategory;
