const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requiered: true
    },
    password: {
        type: String,
        requiered: true
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
        requiered: true,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);
