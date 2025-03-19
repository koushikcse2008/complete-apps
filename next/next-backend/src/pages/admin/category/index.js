// pages/admin/categories/index.js
import CommonLayout from '@/layouts/commonlayout'
import Link from 'next/link';
import Head from 'next/head';
import { formatDate } from '../../../utils/dateUtils';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

export async function getServerSideProps() {
  try {
        const page = query.page || 1;
        const limit = 1;
        const apiUrl = process.env.NEXT_PUBLIC_API_URI;
        const res = await axios.get(`${apiUrl}/category/list?page=${page}&limit=${limit}`);
        return { props: { categoryList: res.data, totalPages: data.totalPages, currentPage: parseInt(page) } };
    } catch (error) {
      return { props: { categoryList: [] } };
  }
}

const CategoriesList = ({ categoryList, totalPages, currentPage }) => {  

  const [categories, setCategories] = useState(categoryList?.data);
  const site_url = process.env.NEXT_PUBLIC_SITE_URI;
  const apiUrl = process.env.NEXT_PUBLIC_API_URI;  


  const showAlert = async (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(id);
      }
    });
  
  }


  const deleteCategory = async (id) => {
    
    const res = await axios.get(`${apiUrl}/category/delete/${id}`);
    if (res.data) {
      setCategories(categories.filter((category) => category._id !== id));
      toast.success('Successfully deleted!');
    } else {
      toast.error('Error deleting category!');
    }


    
    // const confirmation = window.confirm("Are you sure you want to delete this category?");
    // if (!confirmation) return;
    
    // const res = await axios.get(`${apiUrl}/category/delete/${id}`);
    
    // if (res.data) {
    //   setCategories(categories.filter((category) => category._id !== id));
    //   toast.success('Successfully deleted!');
    // } else {
    //   toast.error('Error deleting category!');
    //   //console.error("Error deleting category");
    // }
  };

  return (
    <>
      <Head>
        <title>Manage Category</title>
    </Head>
    <CommonLayout>
    <h3>Manage Category</h3>
    <Link href={`${site_url}/admin/category/add`} class='add-data'>Create Category</Link>
    <hr />
    {/* {JSON.stringify(categories)} */}
    <table class="table table-striped mb-4">
        <thead>
        <tr>
            <th scope="col">!#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
            {categories.map((category) => (
                <tr>
                    <th scope="row">1</th>
                    <td>{category.cat_name}</td>
                    <td>{category.cat_desc}</td>
                    <td>{ formatDate(category.createdAt) }</td>
                    <td>
                    <Link href={`${site_url}/admin/category/edit/${category._id}`} class='action-link'>Edit</Link> | 
                    <Link onClick={() => showAlert(category._id)} class='action-link' href=''>Delete</Link>
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

    {/* Pagination Controls */}
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <Link key={i + 1} href={`/?page=${i + 1}`} passHref>
          <button disabled={currentPage === i + 1}>{i + 1}</button>
        </Link>
      ))}
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
