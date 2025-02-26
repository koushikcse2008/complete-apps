import CommonLayout from '@/layouts/commonlayout'
import Head from 'next/head'
import Link from 'next/link'
import { formatDate } from '../../utils/dateUtils';

export async function getServerSideProps() {
    const apiUrl = process.env.API_URI; 
    console.log(apiUrl);
    console.log("Hello")
  
    const res = await fetch(`${apiUrl}category/list`);
    const categoryList = await res.json();
  
    return { props: { categoryList } };
}

const Categories = ({ categoryList }) => {

  return (
    <>
    <Head>
        <title>Manage Category</title>
    </Head>
    <CommonLayout>
    <h3>Manage Category</h3>
    Data fetched from the API: {JSON.stringify(categoryList)}
    <Link href='' class='add-data'>Create Brand</Link>
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
        {/* {categoryList.map((category) => (
          <li key={category._id}>
            {category.cat_name} - {category.cat_desc}
          </li>
        ))} */}
            {categoryList.map((category) => (
                <tr>
                    <th scope="row">1</th>
                    <td>{category.cat_name}</td>
                    <td>{ formatDate(category.createdAt) }</td>
                    <td>
                    <Link href={"category/edit/"+data._id} class='action-link'>Edit</Link> | <Link onClick={() => deleteCategory(category._id)} class='action-link'>Delete</Link>
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
  )
}

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`/api/admin/category/${id}`);
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.error('Error deleting category', error);
    }
  };



export default Categories
