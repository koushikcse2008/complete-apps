const Category = require('./category.model');

const createCategory = async (newCategory) => {
    try {
        return await new Category(newCategory).save();
    } catch(error) {
        throw error;
    }
}

const editCategory = async (editId) => {
    try {
        return await Category.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateCategory = async (updateId, updateCategory) => {
    
    try {
        return await Category.findByIdAndUpdate(
            { _id: updateId },
            { $set: { cat_name: updateCategory.cat_name, cat_desc: updateCategory.cat_desc, cat_status: updateCategory.cat_status }},
            { new: false, runValidators: true } // Ensure validators run
        );
    } catch (error) {
        throw error;
    }
}

const listCategory = async () => {
    try {
        return await Category.find();
    } catch(error) {
        throw error;
    }
}

const listCategoryPagination = async (page, limit) => {
    try {
        return await Category.find().skip((page - 1) * limit).limit(limit);
    } catch(error) {
        throw error;
    }
}

const deleteCategory = async (delId) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(delId);
        if (!deletedCategory) {
            throw new Error('Category not found');
        }
        return deletedCategory;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCategory,
    editCategory,
    updateCategory,
    listCategory,
    listCategoryPagination,
    deleteCategory
};


