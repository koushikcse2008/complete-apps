const Contact = require('./contact.model');

const createContact = async (newContact) => {
    if(newContact.fname === '') {
        throw 'Please enter fname';
      } else if(newContact.lname === '') {
        throw 'Please enter lname';
      } else if(newContact.email === '') {
        throw 'Please enter email';
      } else if(newContact.phone === '') {
        throw 'Please enter phone';
      } else if(newContact.subject === '') {
        throw 'Please enter subject';
      } else if(newContact.message === '') {
        throw 'Please enter message';
      } else {
        try {
            //console.log("hi")
            return await new Contact(newContact).save();           
          } catch (error) {
            throw error;
          }
      }
}

const editContact = async (editId) => {
    try {
        return await Contact.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateContact = async (updateId, updateContact) => {
  try {
    return await Contact.findByIdAndUpdate(
        { _id: updateId },
        { 
          $set: { 
            fname: updateContact.fname, 
            lname: updateContact.lname, 
            phone: updateContact.phone, 
            email: updateContact.email, 
            subject: updateContact.subject, 
            message: updateContact.message, 
            ct_status: updateContact.ct_status 
          }
        },
        { new: false, runValidators: true } 
    );
  } catch (error) {
    throw error;
  }
}

const listContact = async () => {
  try {
    return await Contact.find();
  } catch (error) {
    throw error;
  }
}

const listContactPagination = async (page, limit) => {
    try {
        return await Contact.find().skip((page - 1) * limit).limit(limit);
    } catch(error) {
        throw error;
    }
}

const deleteContact = async(delId) => {
  try{
   return await Contact.findByIdAndDelete(delId);
  }
  catch (err) {
    throw err;
  };
}

module.exports = {
    createContact,
    editContact,
    updateContact,
    listContact,
    listContactPagination,
    deleteContact
}