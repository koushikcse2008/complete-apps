// pages/admin/category/[id]/edit.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditCategoryPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchCategory = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/admin/category/${id}`);
        setName(response.data.category.name);
        setDescription(response.data.category.description);
      } catch (error) {
        console.error('Error fetching category', error);
      }
    };
    fetchCategory();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/admin/category/${id}`, { name, description });
      router.push('/admin/categories');
    } catch (error) {
      console.error('Error updating category', error);
    }
  };

  return (
    <div>
      <h1>Edit Category</h1>
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
        <button type="submit">Update Category</button>
      </form>
    </div>
  );
};

export default EditCategoryPage;
