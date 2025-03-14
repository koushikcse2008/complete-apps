const User = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const createUser = async (newUser) => {
    try {
        return await new User(newUser).save();
    } catch(error) {
        throw error;
    }
}

const editUser = async (userId) => {
    try {
        return await User.findById(userId);
    } catch(error) {
        throw error;
    }
}

const updateUser = async (updateId, updateUser) => {
    try {
        return await User.findByIdAndUpdate(
            { _id: updateUser._id },
            { 
                user_type: updateUser.user_type, 
                user_name: updateUser.user_name, 
                email: updateUser.email, 
                password: updateUser.password, 
                phone: updateUser.phone, 
                addr: updateUser.addr, 
                country: updateUser.country, 
                state: updateUser.state, 
                city: updateUser.city, 
                zipcode: updateUser.zipcode, 
            },
            { new: false }
        );
    } catch(error) {
        throw error;
    }
}

const listUser = async () => {
    try {
        return await User.find();
    } catch(error) {
        throw error;
    }
}

const listUserPagination = async (page, limit) => {
    try {
        return await User.find().skip((page - 1) * limit).limit(limit);
    } catch(error) {
        throw error;
    }
}

const deleteUser = async (delId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(delId);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (error) {
        throw error;
    }
}

const registerUser = async (newUser) => {
    try {
        newUser.password = generatePasswordHash(newUser.password);
        return await new User(newUser).save();           
      } catch (error) {
        throw error;
      }
}

const loginUser = async (userData) => {
try {
  const user = await User.findOne({ email: userData.email });
  if(user && user._id) {
    
    //const matchPassword = bcrypt.compareSync(userData.password, user.password);
    const matchPassword = bcrypt.compare(userData.password, user.password);
    if(matchPassword) {

     const token = generateJwtToken(user._id, user);
     return token;

    } else {
      throw "Password does not match";
    }
    
  } else {
    throw "Email not exist";
  }
        
} catch (error) {
  throw error;
}
}

const generatePasswordHash = (password) => {
    const TEN = 10;
    const salt = bcrypt.genSaltSync(TEN);
    return bcrypt.hashSync(password, salt);
};

const generateJwtToken = async (userId, user) => {
    let token = jwt.sign(
      {
        _id: userId,
        email: _.get(user, "email", "")
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    return {
      token,
    };
  };

module.exports = {
    createUser,
    editUser,
    updateUser,
    listUser,
    listUserPagination,
    deleteUser,
    registerUser,
    loginUser
};