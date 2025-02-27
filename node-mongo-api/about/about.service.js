const About = require('./about.model');

const createAbout = async (newAbout) => {
    try {
        return await new About(newAbout).save();
    } catch(error) {
        throw error;
    }
}

const editAbout = async (editId) => {
    try {
        return await About.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateAbout = async (updateId, updateAbout) => {
    try {

        return await About.findByIdAndUpdate(
            { _id: updateId },
            { 
                $set: { 
                    sv_name: updateAbout.sv_name, 
                    sv_desc: updateAbout.sv_desc, 
                    sv_status: updateAbout.sv_status 
                }
            },
            { new: false, runValidators: true } 
        );
        //return await About.find();
    } catch (error) {
        throw error;
    }

}

const listAbout = async () => {
    try {
        return await About.find();
    } catch(error) {
        throw error;
    }
}

const listAboutPagination = async (page, limit) => {
    try {
        return await About.find().skip((page - 1) * limit).limit(limit);
    } catch(error) {
        throw error;
    }
}

const deleteAbout = async (delId) => {
    try {
            const deletedAbout = await About.findByIdAndDelete(delId);
            if (!deletedAbout) {
                throw new Error('About not found');
            }
            return deletedAbout;
        } catch (error) {
            throw error;
        }
}

module.exports = {
    createAbout,
    editAbout,
    updateAbout,
    listAbout,
    listAboutPagination,
    deleteAbout,
}