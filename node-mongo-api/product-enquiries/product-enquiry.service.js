const ProductEnquiry = require('./product-enquiry.model');

const createProductEnquiry = async (newProduct) => {
    try {
        return await new ProductEnquiry(newProduct).save();
    } catch(error) {
        throw error;
    }
}

const editProductEnquiry = async (productId) => {
    try {
        return await new ProductEnquiry.findById(productId);
    } catch(error) {
        throw error;
    }
}

const updateProductEnquiry = async (updateProduct) => {
    try {
        return await new ProductEnquiry.findByIdAndUpdate(
            { _id: updateProduct._id }, 
            { 
                cat_id: updateProduct.cat_id,
                brand_id: updateProduct.brand_id,
                prod_name: updateProduct.prod_name,
                prod_slug: updateProduct.prod_slug,
                prod_short_desc: updateProduct.prod_short_desc,
                prod_desc: updateProduct.prod_desc,
                prod_inventory: updateProduct.prod_inventory,
                prod_price: updateProduct.prod_price,
                prod_status: updateProduct.prod_status,
            }, 
            { new: false }
        );
    } catch(error) {
        throw error;
    }
}

const listProductEnquiry = async () => {
    try {
        //return await new ProductEnquiry.find();
        return await ProductEnquiry.aggregate([
            {                
                $lookup: {
                    from: "products",
                    localField: "prod_id",         
                    foreignField: "_id",
                    as: "product_info"            
                }
            },
            {                
                $unwind: "$product_info"
            },              
            {
                $project: {
                    user_name: 1,
                    user_email: 1,
                    user_phone: 1,
                    query_details: 1,
                    query_status: 1,
                    prod_name: "$product_info.prod_name",
                    prod_price: "$product_info.prod_price"
                }
            }
        ]);

    } catch(error) {
        throw error;
    }
}

const deleteProductEnquiry = async (delId) => {
    try {
        return await new ProductEnquiry.findByIdAndDelete(delId);
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createProductEnquiry,
    editProductEnquiry,
    updateProductEnquiry,
    listProductEnquiry,
    deleteProductEnquiry
};


