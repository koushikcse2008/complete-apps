// pages/admin/categories/edit/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CommonLayout from '@/layouts/commonlayout';
import Link from 'next/link';

import { toast } from 'react-toastify';

const EditCategory = () => {
      const router = useRouter();
      const { id } = router.query;
      const [cat_name, setName] = useState('');
      const [cat_desc, setDesc] = useState('');
      const apiUrl = process.env.NEXT_PUBLIC_API_URI;
      const site_url = process.env.NEXT_PUBLIC_SITE_URI;
      

      useEffect(() => {
        if (id) {
          const fetchCategory = async () => {
            const res = await fetch(`${apiUrl}/category/edit/${id}`);
            const result = await res.json();
            //console.log(result.data);
            setName(result.data.cat_name);
            setDesc(result.data.cat_desc);
          };

          fetchCategory();
        }
      }, [id]);

      const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = process.env.NEXT_PUBLIC_API_URI;

        const res = await fetch(`${apiUrl}/category/update/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cat_name, cat_desc }),
        });

        if (res.ok) {
          toast.success('Successfully updated!');
          //router.push('/admin/category');
        } else {
          toast.error('Error updating category!');
          //console.error('Error updating category');
        }
      };

    return (
        <>
            <CommonLayout>
                <h3>Edit Category</h3>
                <Link href='/admin/category'>Back to Category</Link>
                <hr />
                <div class='row'>
                    <div class="mb-3 col-md-3">
                        <form onSubmit={handleSubmit}>

                            <label for="formBrand" class="form-label">Name:</label>
                            <input type="text" class="form-control input-sm mb-3" value={cat_name} onChange={(e) => setName(e.target.value)} required />

                            <label for="formBrand" className="form-label">Description:</label>
                            <textarea className="form-control input-sm mb-3" value={cat_desc} onChange={(e) => setDesc(e.target.value)} rows={6} required></textarea>

                            <button type="submit" name='btnAdd' id='btnAdd' class='btn btn-primary'>Update Category</button>
                        </form>
                    </div>
                </div>
            </CommonLayout>
        </>
    );
};

export default EditCategory;
