const Service = require('./service.model');

const createService = async (newService) => {
    try {
        return await new Service(newService).save();
    } catch(error) {
        throw error;
    }
}

const editService = async (editId) => {
    try {
        return await Service.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateService = async (updateId, updateService) => {
    try {

        return await Service.findByIdAndUpdate(
            { _id: updateId },
            { 
                $set: { 
                    sv_name: updateService.sv_name, 
                    sv_desc: updateService.sv_desc, 
                    sv_image: updateService.sv_image,
                    sv_status: updateService.sv_status 
                }
            },
            { new: false, runValidators: true } 
        );
        //return await Service.find();
    } catch (error) {
        throw error;
    }

}

const listService = async () => {
    try {
        return await Service.find();
    } catch(error) {
        throw error;
    }
}

const listServicePagination = async (page, limit) => {
    try {
        return await Service.find().skip((page - 1) * limit).limit(limit);
    } catch(error) {
        throw error;
    }
}

const deleteService = async (delId) => {
    try {
            const deletedService = await Service.findByIdAndDelete(delId);
            if (!deletedService) {
                throw new Error('Category not found');
            }
            return deletedService;
        } catch (error) {
            throw error;
        }
}

module.exports = {
    createService,
    editService,
    updateService,
    listService,
    listServicePagination,
    deleteService,
}