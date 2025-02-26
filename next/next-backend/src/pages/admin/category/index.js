// pages/admin/categories/index.js

import CommonLayout from '@/layouts/commonlayout'
import Link from 'next/link';
import Head from 'next/head';
import { formatDate } from '../../../utils/dateUtils';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URI;
  
    const res = await fetch(`${apiUrl}/category/list`);
    const categoryList = await res.json();
  
    return { props: { categoryList } };
}

const CategoriesList = ({ categoryList }) => {  

  const [categories, setCategories] = useState([]);

  const site_url = process.env.NEXT_PUBLIC_SITE_URI;

  const apiUrl = process.env.NEXT_PUBLIC_API_URI;
  

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      const response = await fetch(`${apiUrl}/category/list`);
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this category?");
    if (!confirmation) return;

    const res = await fetch(`${apiUrl}/category/delete/${id}`, {
      method: 'POST',
    });

    if (res.data) {
      // Update the UI by filtering out the deleted category from the list
      setCategories(categories.filter((category) => category.id !== id));
    } else {
      console.error("Error deleting category");
    }
  };

  return (
    <>
      <Head>
        <title>Manage Category</title>
    </Head>
    <CommonLayout>
    <h3>Manage Category</h3>
    Data fetched from the API: {JSON.stringify(categoryList)}
    <Link href={`${site_url}/admin/category/add`} class='add-data'>Create Brand</Link>
    <hr />
    <table class="table table-striped mb-4">
        <thead>
        <tr>
            <th scope="col">!#</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
            {categoryList.map((category) => (
                <tr>
                    <th scope="row">1</th>
                    <td>{category.cat_name}</td>
                    <td>{ formatDate(category.createdAt) }</td>
                    <td>
                    <Link href={`${site_url}/admin/category/edit/${category._id}`} class='action-link'>Edit</Link> | 
                    <Link onClick={() => deleteCategory(category._id)} class='action-link' href=''>Delete</Link>
                    </td>
                </tr>
            ))}
        
        </tbody>
    </table>

    <hr class='mt-2' />

    <div class='mt-4'>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a href="!#" class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="!#">1</a></li>
                <li class="page-item"><a class="page-link" href="!#">2</a></li>
                <li class="page-item"><a class="page-link" href="!#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="!#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
      </CommonLayout>
    </>
  );
};

// const deleteCategory = async (id) => {
//     try {
//         const apiUrl = process.env.API_URI; 

//             const res = await fetch(`${apiUrl}category/delete`, {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: id,
//             });


//         //await axios.delete(`${apiUrl}category/delete`  `/api/admin/category/${id}`);
//         setCategories(categories.filter((category) => category._id !== id));
//     } catch (error) {
//       console.error('Error deleting category', error);
//     }
// };

export default CategoriesList;
