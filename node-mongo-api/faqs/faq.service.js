const Faq = require('./faq.model');

const createFaq = async (newFaq) => {
    try {
        return await new Faq(newFaq).save();
    } catch(error) {
        throw error;
    }
}

const editFaq = async (editId) => {
    try {
        return await Faq.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateFaq = async (updateId, updateFaq) => {
    try {

        return await Faq.findByIdAndUpdate(
            { _id: updateId },
            { $set: { faq_question: updateFaq.faq_question, faq_answer: updateFaq.faq_answer, faq_status: updateFaq.faq_status }},
            { new: false, runValidators: true } 
        );
        //return await Faq.find();
    } catch (error) {
        throw error;
    }

}

const listFaq = async () => {
    try {
        return await Faq.find();
    } catch(error) {
        throw error;
    }
}

const listFaqPagination = async (page, limit) => {
    try {
        return await Faq.find().skip((page - 1) * limit).limit(limit);
    } catch(error) {
        throw error;
    }
}

const deleteFaq = async (delId) => {
    try {
            const deletedFaq = await Faq.findByIdAndDelete(delId);
            if (!deletedFaq) {
                throw new Error('Category not found');
            }
            return deletedFaq;
        } catch (error) {
            throw error;
        }
}

module.exports = {
    createFaq,
    editFaq,
    updateFaq,
    listFaq,
    listFaqPagination,
    deleteFaq,
}