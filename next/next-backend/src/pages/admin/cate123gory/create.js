// pages/admin/category/create.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import CommonLayout from '@/layouts/commonlayout';

const CreateCategoryPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/admin/category/create', { name, description });
      router.push('/admin/categories');
    } catch (error) {
      console.error('Error creating category', error);
    }
  };

  return (
    <>
    <CommonLayout>
      <h1>Create New Category</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Category Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create Category</button>
      </form>
      </CommonLayout>
    </>
  );
};

export default CreateCategoryPage;
