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
        type: String,
        required: true
    },    
    avatar: {
        type: String,
        default: '../../togetherData/assets/profile.png'
    },
    dateofRegistration:{
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('users', UserSchema);
