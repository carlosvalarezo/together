const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    nickName: {
        type: String
    },    
    avatar: {
        type: String
    },
    dateofRegistration:{
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('users', UserSchema);
