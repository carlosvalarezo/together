const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    friends:[{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }]
});

module.exports = mongoose.model('profile', UserSchema);
