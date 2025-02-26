const Product = require('./product.model');

const createProduct = async (newProduct) => {
    try {
        return await new Product(newProduct).save();
    } catch(error) {
        throw error;
    }
}

const editProduct = async (productId) => {
    try {
        return await new findById(productId);
    } catch(error) {
        throw error;
    }
}

const updateProduct = async (updateProduct) => {
    try {
        return await new Product.findByIdAndUpdate(
            { _id: updateProduct._id }, 
            {
                $set: { 
                    cat_id: updateProduct.cat_id,
                    brand_id: updateProduct.brand_id,
                    prod_name: updateProduct.prod_name,
                    prod_slug: updateProduct.prod_slug,
                    prod_short_desc: updateProduct.prod_short_desc,
                    prod_desc: updateProduct.prod_desc,
                    prod_inventory: updateProduct.prod_inventory,
                    prod_price: updateProduct.prod_price,
                    prod_status: updateProduct.prod_status,
                }
            }, 
            { new: false, runValidators: true }
        );
    } catch(error) {
        throw error;
    }
}

const listProduct = async () => {
    try {
        //return await Product.find();
        return await Product.aggregate([
            {
              $lookup: {
                from: 'categories',  
                localField: 'cat_id', 
                foreignField: '_id',
                as: 'category'      
              }
            },
            {
                $unwind: {
                  path: '$category',
                  preserveNullAndEmptyArrays: true 
                }
              },
            {
              $lookup: {
                from: 'brands',      
                localField: 'brand_id', 
                foreignField: '_id',   
                as: 'brand'           
              }
            }, 
            {
              $unwind: {
                path: '$brand',
                preserveNullAndEmptyArrays: true 
              }
            },
            {
              $project: {
                _id: 1,
                prod_name: 1,
                prod_slug: 1,
                prod_price: 1,
                prod_inventory: 1,
                prod_short_desc: 1,
                prod_desc: 1,
                prod_status: 1,
                category: '$category',
                brand: '$brand'
              }
            }
          ]);

    } catch(error) {
        throw error;
    }
}

const deleteProduct = async (delId) => {
    try {
        return await new Product.findByIdAndDelete(delId);
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createProduct,
    editProduct,
    updateProduct,
    listProduct,
    deleteProduct
};

// {
//     "cat_id": "67b8807c3452778f44bd66cd",
//     "brand_id": "67bf21484e877ffc0a83171e",
//     "prod_name": "iPhone 16 Pro",
//     "prod_slug": "iphone-16-pro",
//     "prod_short_desc": "iphone-16-pro-short-desc",
//     "prod_desc": "iphone-16-pro-desc",
//     "prod_inventory": 40,
//     "prod_price": 23.58,
//     "prod_status": "active"
// }
